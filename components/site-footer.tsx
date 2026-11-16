import Link from "next/link";
import { ArrowUpLeft, Mail } from "lucide-react";
import type { SiteSettings } from "@/lib/content";
import { LocaleText } from "@/components/locale-text";
import { SOCIAL_LINKS } from "@/lib/social-links";
export function SiteFooter({ settings }: { settings: SiteSettings }) {
  const social = SOCIAL_LINKS.filter((item) => item.url.trim().length > 0);
  return <footer className="site-footer"><div className="page-shell footer-main">
    <div className="footer-brand-block"><div className="footer-mark">ح<span>·</span>ع</div><h2>{settings.authorName || "حسين العوادي"}</h2><p>{settings.footerNote || <LocaleText ar="كل فكرة تستحق أن تُقرأ بهدوء." en="Every idea deserves thoughtful reading." />}</p>
      <div className="social-links" aria-label="Social media">{social.map((item) => <a className="social-link" key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.label} title={item.label}><span>{item.short}</span></a>)}</div></div>
    <div className="footer-nav-block"><span className="eyebrow"><LocaleText ar="تصفّح" en="Explore" /></span><Link href="/articles"><LocaleText ar="المقالات" en="Articles" /></Link><Link href="/books"><LocaleText ar="الكتب والإصدارات" en="Books" /></Link><Link href="/about"><LocaleText ar="عن الكاتب" en="About" /></Link></div>
    <div className="footer-contact-block"><span className="eyebrow"><LocaleText ar="ابقَ على تواصل" en="Stay in touch" /></span><p><LocaleText ar="للاستفسارات والتعاون والمراسلات." en="For enquiries, collaboration and correspondence." /></p>{settings.contactEmail && <a href={`mailto:${settings.contactEmail}`}><Mail size={14} /><LocaleText ar="راسلني عبر البريد" en="Email me" /><ArrowUpLeft size={14} /></a>}</div>
  </div><div className="page-shell footer-bottom"><span>© {new Date().getFullYear()} حسين العوادي. <LocaleText ar="جميع الحقوق محفوظة." en="All rights reserved." /></span><span><LocaleText ar="صُنع للكلمة التي تبقى." en="Made for words that last." /></span></div></footer>;
}
