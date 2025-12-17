"use client";

import Link from "next/link";

export function WhatsAppButton() {
  // Replace "1234567890" with your actual WhatsApp number including the country code, but without any '+' or '00'.
  const phoneNumber = "1234567890";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-12 items-center justify-center rounded-full bg-green-500 px-4 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      WhatsApp
    </Link>
  );
}
