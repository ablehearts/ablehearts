import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20" as any,
});

export async function POST(req: NextRequest) {
  const { amount = 2500, currency = "cad" } = await req.json();
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    currency,
    line_items: [
      {
        price_data: {
          currency,
          product_data: { name: "AbleHearts Donation" },
          unit_amount: amount,
        },
        quantity: 1,
      },
    ],
    success_url: `${req.nextUrl.origin}/donate?success=1`,
    cancel_url: `${req.nextUrl.origin}/donate?canceled=1`,
  });
  return NextResponse.json({ url: session.url });
}
