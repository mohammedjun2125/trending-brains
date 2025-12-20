"use client";

import Link from "next/link";
import { WHATSAPP_LINK } from "@/lib/config";

export function WhatsAppButton() {

  return (
    <Link
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-12 items-center justify-center rounded-full bg-green-500 px-4 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      WhatsApp
    </Link>
  );
}
