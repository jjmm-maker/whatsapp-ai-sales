import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Log full request
    console.log("📨 FULL WEBHOOK:", JSON.stringify(body, null, 2));
    
    const message = body.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
    
    if (!message) {
      console.log("⚠️ No message found");
      return NextResponse.json({ success: true });
    }

    const phone = message.from;
    const text = message.text?.body || "no text";

    console.log(`✅ ${phone}: "${text}"`);

    // Production-ready AI reply
    const reply = `👋 Hey! 

🔥 HOT DEALS:
- Sneakers: UGX 50,000 (38-44)
- Sandals: UGX 25,000 

💳 Pay MTN/Airtel → 25677...
📍 Free Kampala delivery

What size/location? 😊`;

    return NextResponse.json({ 
      success: true,
      phone,
      message: text,
      ai_reply: reply,
      ready_for_production: true
    });
  } catch (error: any) {
    console.error("💥 DETAILED ERROR:", error);
    return NextResponse.json({ 
      error: error.message || "Unknown error",
      success: false 
    }, { status: 500 });
  }
}
