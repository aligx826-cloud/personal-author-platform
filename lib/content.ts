import { hasSanityConfig, sanityFetch } from "@/lib/sanity/client";
import { BOOK_QUERY, BOOKS_QUERY, POST_QUERY, POSTS_QUERY, SETTINGS_QUERY } from "@/lib/sanity/queries";

export type Post = {
  _id: string; title: string; slug: string; excerpt: string; category?: string;
  author?: string; publishedAt?: string; readingTime?: number; featured?: boolean;
  coverUrl?: string; coverAlt?: string; body?: any[]; seoTitle?: string; seoDescription?: string;
};

export type Book = {
  _id: string; title: string; slug: string; subtitle?: string; summary: string;
  description?: any[]; author?: string; publishedAt?: string; featured?: boolean;
  coverUrl?: string; coverAlt?: string; pdfUrl?: string; freeDownload?: boolean;
  price?: number; currency?: string; paymentProvider?: string; paymentLabel?: string;
  purchaseUrl?: string; seoDescription?: string;
};

export type SiteSettings = {
  title?: string; tagline?: string; heroEyebrow?: string; heroTitle?: string; heroDescription?: string;
  authorName?: string; portraitUrl?: string; heroBackgroundUrl?: string; siteBackgroundUrl?: string; about?: any[];
  seoDescription?: string; accentColor?: string; contactEmail?: string; socialLinks?: {label: string; url: string}[]; footerNote?: string;
};

export const demoPosts: Post[] = [
  {
    _id: "demo-post-1", slug: "the-question-is-a-beginning", title: "حين يصبح السؤال بداية الطريق",
    excerpt: "ليست قيمة السؤال في أنه يربك اليقين، بل في أنه يعلّم العقل كيف يميّز بين ما يعرفه وما يظن أنه يعرفه.",
    category: "فكر وفلسفة", author: "حسين العوادي", publishedAt: "2026-10-12T09:00:00.000Z", readingTime: 6, featured: true,
    coverUrl: "/covers/article-thought.svg",
    body: [
      { _type: "block", style: "normal", children: [{ _type: "span", text: "لا يبدأ التفكير الجاد حين نمتلك جواباً جاهزاً، بل حين نمتلك الشجاعة لنسأل السؤال الصحيح. فالسؤال ليس خصماً للحقيقة، وإنما طريق من طرق الاقتراب منها." }] },
      { _type: "block", style: "h2", children: [{ _type: "span", text: "العقل بين الدهشة والتمحيص" }] },
      { _type: "block", style: "normal", children: [{ _type: "span", text: "أن نفكر يعني أن نمنح الفكرة وقتها، وأن نختبر مقدماتها، وأن نسمح للدليل بأن يغيّر موقفنا. ليست السرعة في الحكم فضيلة، كما أن كثرة الكلام ليست دليلاً على عمق الفهم." }] },
      { _type: "block", style: "blockquote", children: [{ _type: "span", text: "السؤال الجيد لا يهدم الطريق؛ إنه يكشف أين نضع أقدامنا." }] },
      { _type: "block", style: "normal", children: [{ _type: "span", text: "هذه مساحة للتأمل والحوار، لا لإغلاق الأبواب. وكل قراءة صادقة تضيف إلى الفكرة زاوية جديدة." }] },
    ],
  },
  {
    _id: "demo-post-2", slug: "reading-that-changes-us", title: "القراءة التي تغيّر صاحبها",
    excerpt: "نقرأ كي نرى العالم من نافذة أوسع، وكي نعود إلى أنفسنا بأسئلة أكثر نضجاً وهدوءاً.",
    category: "قراءات", author: "حسين العوادي", publishedAt: "2026-09-28T09:00:00.000Z", readingTime: 4,
    coverUrl: "/covers/article-reading.svg",
    body: [
      { _type: "block", style: "normal", children: [{ _type: "span", text: "ليست القراءة سباقاً لإنهاء الصفحات، ولا جمعاً للعناوين في الذاكرة. إنها علاقة تتشكل ببطء بين القارئ والفكرة، وتترك في داخله أثراً يتجاوز لحظة إغلاق الكتاب." }] },
      { _type: "block", style: "h2", children: [{ _type: "span", text: "حين تصبح المعرفة تجربة" }] },
      { _type: "block", style: "normal", children: [{ _type: "span", text: "نعود من القراءة الحقيقية أكثر انتباهاً لما حولنا، وأقل استعجالاً في إصدار الأحكام. الكتاب الجيد لا يمنحنا معلومات فحسب، بل يساعدنا على رؤية ما اعتدنا المرور به دون ملاحظة." }] },
    ],
  },
  {
    _id: "demo-post-3", slug: "the-craft-of-meaning", title: "صناعة المعنى في أيام مزدحمة",
    excerpt: "وسط إيقاع الحياة السريع، نحتاج إلى لحظات نعيد فيها ترتيب الأولويات ونستعيد معنى ما نفعله.",
    category: "تأملات", author: "حسين العوادي", publishedAt: "2026-09-10T09:00:00.000Z", readingTime: 5,
    coverUrl: "/covers/article-meaning.svg",
    body: [
      { _type: "block", style: "normal", children: [{ _type: "span", text: "تزدحم الأيام بالمهام، وقد نمضي من عمل إلى آخر دون أن نسأل أنفسنا عن المعنى الذي يجمعها. ومع الوقت يصبح الانشغال عادة، لا دليلاً على أننا نتقدم في الاتجاه الذي نريده." }] },
      { _type: "block", style: "h2", children: [{ _type: "span", text: "مساحة صغيرة للانتباه" }] },
      { _type: "block", style: "normal", children: [{ _type: "span", text: "ربما تبدأ استعادة المعنى بلحظة هدوء، أو صفحة نقرؤها، أو حديث صادق، أو قرار نختاره بوعي. ليست الفكرة أن نغيّر كل شيء دفعة واحدة، بل أن نعرف لماذا نفعل ما نفعل." }] },
      { _type: "block", style: "blockquote", children: [{ _type: "span", text: "حين نفهم وجهتنا، يصبح للخطوات الصغيرة وزنها الحقيقي." }] },
    ],
  },
];

export const demoBooks: Book[] = [
  {
    _id: "demo-book-1", slug: "la-ilhad", title: "لا إلحاد", subtitle: "قراءة في الأسئلة الكبرى",
    summary: "مساحة فكرية لمناقشة أسئلة الوجود والمعرفة والإيمان، بصياغة حوارية ومنهج تحليلي.",
    author: "حسين العوادي", publishedAt: "2026-01-01", featured: true,
    coverUrl: "/covers/la-ilhad.svg", freeDownload: false, paymentLabel: "تفاصيل الكتاب",
  },
];

function baghdadToday(): string {
  const parts = new Intl.DateTimeFormat("en", {
    timeZone: "Asia/Baghdad", year: "numeric", month: "2-digit", day: "2-digit",
  }).formatToParts(new Date());
  const part = (type: string) => parts.find((item) => item.type === type)?.value || "";
  return `${part("year")}-${part("month")}-${part("day")}`;
}

function visibleDemoPosts(): Post[] {
  const today = baghdadToday();
  return demoPosts
    .filter((post) => Boolean(post.publishedAt) && post.publishedAt!.slice(0, 10) <= today)
    .sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""));
}

export async function getPosts(): Promise<Post[]> {
  const today = baghdadToday();
  if (!hasSanityConfig) return visibleDemoPosts();
  const data = await sanityFetch<Post[]>(POSTS_QUERY, { today });
  return data ?? visibleDemoPosts();
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const today = baghdadToday();
  if (!hasSanityConfig) return visibleDemoPosts().find((post) => post.slug === slug) || null;
  return (await sanityFetch<Post>(POST_QUERY, { slug, today })) || null;
}

export async function getBooks(): Promise<Book[]> {
  if (!hasSanityConfig) return demoBooks;
  const data = await sanityFetch<Book[]>(BOOKS_QUERY);
  return data ?? demoBooks;
}

export async function getBookBySlug(slug: string): Promise<Book | null> {
  if (!hasSanityConfig) return demoBooks.find((book) => book.slug === slug) || null;
  return (await sanityFetch<Book>(BOOK_QUERY, { slug })) || null;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  return (await sanityFetch<SiteSettings>(SETTINGS_QUERY)) || {
    title: "حسين العوادي",
    tagline: "مساحة للكلمة والفكرة والمعنى",
    heroEyebrow: "كاتب · مقالات · كتب",
    heroTitle: "أكتب لأفتح نافذةً أخرى على الفكرة.",
    heroDescription: "هنا تلتقي الأسئلة بالتأمل، وتجد الأفكار مساحةً للقراءة والنقاش. مرحباً بك في مكتبتي الرقمية.",
    authorName: "حسين العوادي",
    seoDescription: "مقالات وكتب وقراءات في الفكر والثقافة للكاتب حسين العوادي.",
    accentColor: "#b8834b",
    contactEmail: "",
    footerNote: "كل فكرة تستحق أن تُقرأ بهدوء.",
  };
}
