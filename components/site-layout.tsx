import type { CSSProperties, ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppContact } from "@/components/whatsapp-contact";
import { getSiteSettings } from "@/lib/content";
export async function SiteLayoutFrame({ children }: { children: ReactNode }) {
  const settings = await getSiteSettings();
  return <div className="site-frame" style={{ "--accent": settings.accentColor || "#b8834b", "--site-background": settings.siteBackgroundUrl ? `url(${settings.siteBackgroundUrl})` : "none" } as CSSProperties}><SiteHeader /><main>{children}</main><SiteFooter settings={settings} /><WhatsAppContact /></div>;
}
