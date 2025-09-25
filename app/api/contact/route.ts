 // app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ Use your actual Make webhook URL (only once!)
    const makeWebhookUrl = "https://hook.eu2.make.com/476murtf66gthwc7rpd8e2dd449dp4zd";

    // Forward the request to Make
    const res = await fetch(makeWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error("Make webhook call failed");
    }

    return NextResponse.json({
      success: true,
      message: "Data sent to Make 🎉",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}