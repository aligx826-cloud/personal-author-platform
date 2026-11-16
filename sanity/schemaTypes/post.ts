import { defineField, defineType } from "sanity";

function baghdadDate(): string {
  const parts = new Intl.DateTimeFormat("en", {
    timeZone: "Asia/Baghdad", year: "numeric", month: "2-digit", day: "2-digit",
  }).formatToParts(new Date());
  const part = (type: string) => parts.find((item) => item.type === type)?.value || "";
  return `${part("year")}-${part("month")}-${part("day")}`;
}

export default defineType({
  name: "post",
  title: "المقالات",
  type: "document",
  groups: [
    { name: "content", title: "المحتوى", default: true },
    { name: "publication", title: "النشر والأرشفة" },
    { name: "seo", title: "محركات البحث" },
  ],
  fields: [
    defineField({ name: "title", title: "عنوان المقال", type: "string", group: "content", validation: (r) => r.required().max(110) }),
    defineField({ name: "slug", title: "الرابط الدائم", type: "slug", group: "publication", options: { source: "title", maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: "excerpt", title: "نبذة مختصرة", type: "text", rows: 3, group: "content", validation: (r) => r.required().max(260) }),
    defineField({ name: "cover", title: "صورة الغلاف", type: "image", options: { hotspot: true }, group: "content" }),
    defineField({ name: "category", title: "التصنيف", type: "string", group: "content", options: { list: ["فكر وفلسفة", "قراءات", "تأملات", "ثقافة", "مقالات عامة"] } }),
    defineField({ name: "author", title: "اسم الكاتب", type: "string", initialValue: "حسين العوادي", group: "publication" }),
    defineField({ name: "publishedAt", title: "تاريخ النشر", description: "المقال لا يظهر للزوار قبل هذا التاريخ. يظهر تلقائياً عند حلول التاريخ وفق توقيت العراق.", type: "date", group: "publication", initialValue: baghdadDate, validation: (r) => r.required() }),
    defineField({ name: "readingTime", title: "وقت القراءة بالدقائق", type: "number", initialValue: 5, validation: (r) => r.min(1).max(90), group: "publication" }),
    defineField({ name: "featured", title: "إبراز في الصفحة الرئيسية", type: "boolean", initialValue: false, group: "publication" }),
    defineField({ name: "body", title: "نص المقال", type: "array", of: [{ type: "block", styles: [{ title: "فقرة", value: "normal" }, { title: "عنوان رئيسي", value: "h2" }, { title: "عنوان فرعي", value: "h3" }, { title: "اقتباس", value: "blockquote" }], marks: { decorators: [{ title: "عريض", value: "strong" }, { title: "مائل", value: "em" }, { title: "تسطير", value: "underline" }], annotations: [{ name: "link", type: "object", title: "رابط", fields: [{ name: "href", type: "url", title: "الرابط", validation: (r) => r.required() }] }] } }, { type: "image", options: { hotspot: true } }], group: "content" }),
    defineField({ name: "seoTitle", title: "عنوان SEO (اختياري)", type: "string", group: "seo" }),
    defineField({ name: "seoDescription", title: "وصف SEO (اختياري)", type: "text", rows: 2, group: "seo" }),
  ],
  orderings: [{ title: "الأحدث أولاً", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "category", media: "cover" } },
});
