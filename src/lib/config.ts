
export const WHATSAPP_NUMBER = "919700051427";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const generateWhatsappLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
