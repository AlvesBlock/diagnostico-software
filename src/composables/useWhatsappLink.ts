export function useWhatsappLink(message: string): string {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999';
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
