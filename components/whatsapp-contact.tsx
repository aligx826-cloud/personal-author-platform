import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/social-links";
import { LocaleText } from "@/components/locale-text";
export function WhatsAppContact() {
  return <a className="whatsapp-float" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp حسين العوادي"><MessageCircle size={23} /><span><LocaleText ar="تواصل عبر واتساب" en="Chat on WhatsApp" /></span></a>;
}
