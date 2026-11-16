/** عدّل روابط التواصل من هذا الملف فقط. اترك url فارغاً لإخفاء المنصة. */
export const SOCIAL_LINKS = [
  { id: "youtube", label: "YouTube", short: "▶", url: "" },
  { id: "tiktok", label: "TikTok", short: "♪", url: "" },
  { id: "instagram", label: "Instagram", short: "◎", url: "" },
  { id: "x", label: "X", short: "𝕏", url: "" },
  { id: "linkedin", label: "LinkedIn", short: "in", url: "" },
  { id: "facebook", label: "Facebook", short: "f", url: "" },
  { id: "threads", label: "Threads", short: "＠", url: "" },
] as const;
export const WHATSAPP_NUMBER = "9647866345916";
export const WHATSAPP_MESSAGE = "مرحباً حسين، أود التواصل معك.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
