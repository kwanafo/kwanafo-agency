// app/api/make/route.ts
import { NextRequest, NextResponse } from "next/server";

const MAKE_WEBHOOK_URL = "https://hook.eu2.make.com/3vuwuf46b2i97datx0dlfou5clm857wh";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const makeRes = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const text = await makeRes.text();

    return NextResponse.json({
      status: "ok",
      makeResponse: text,
    });
  } catch (error: any) {
    console.error("Error forwarding to Make:", error);
    return NextResponse.json(
      { error: "Forwarding failed", details: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Send a POST request with JSON body to forward data to Make.com",
  });
}