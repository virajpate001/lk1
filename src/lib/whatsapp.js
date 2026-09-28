import { siteSettings } from "@/data/siteSettings";

/** Create a WhatsApp click-to-chat URL. This does not confirm a booking. */
export function createWhatsAppUrl(message, phone = siteSettings.whatsappNumber) {
  const digits = String(phone || "").replace(/\D/g, "");
  if (!digits || digits.includes("XXXXXXXXXX")) {
    throw new Error("Set siteSettings.whatsappNumber before using WhatsApp enquiries.");
  }
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
