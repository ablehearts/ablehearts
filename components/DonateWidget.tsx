"use client";
import { useState } from "react";

const TABS = [
  "Stripe",
  "PayPal",
  "GoFundMe",
  "BuyMeACoffee",
  "Patreon",
  "Crypto",
] as const;
type Tab = (typeof TABS)[number];

export default function DonateWidget() {
  const [active, setActive] = useState<Tab>("Stripe");

  async function payWithStripe(amount = 2500, currency = "cad") {
    const res = await fetch("/api/donations/stripe", {
      method: "POST",
      body: JSON.stringify({ amount, currency }),
    });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
  }

  return (
    <div className="rounded-3xl border shadow p-4">
      <div className="flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`rounded-2xl px-3 py-1 border ${active === t ? "font-bold" : ""}`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {active === "Stripe" && (
          <div className="space-y-3">
            <div className="flex gap-2">
              {[2500, 5000, 10000, 25000].map((a) => (
                <button
                  key={a}
                  onClick={() => payWithStripe(a)}
                  className="rounded-2xl px-3 py-1 border"
                >
                  ${a / 100}
                </button>
              ))}
              <button
                onClick={() => payWithStripe()}
                className="rounded-2xl px-3 py-1 border"
              >
                Custom
              </button>
            </div>
            <p className="text-sm text-gray-600">
              Visa/Mastercard + Apple/Google Pay via Stripe Checkout (test mode
              until live).
            </p>
          </div>
        )}
        {active === "PayPal" && (
          <div id="paypal-buttons" className="text-sm">
            PayPal Smart Buttons (to wire next).
          </div>
        )}
        {active === "GoFundMe" && (
          <a className="underline" href={process.env.NEXT_PUBLIC_GOFUNDME_URL}>
            Open GoFundMe
          </a>
        )}
        {active === "BuyMeACoffee" && (
          <a className="underline" href={process.env.NEXT_PUBLIC_BMAC_URL}>
            Buy Me a Coffee
          </a>
        )}
        {active === "Patreon" && (
          <a className="underline" href={process.env.NEXT_PUBLIC_PATREON_URL}>
            Patreon
          </a>
        )}
        {active === "Crypto" && (
          <p className="text-sm">
            Crypto checkout (Coinbase Commerce) placeholder.
          </p>
        )}
      </div>
    </div>
  );
}
