export const POSTS_QUERY = `*[_type == "post" && defined(slug.current) && defined(publishedAt) && publishedAt <= $today] | order(publishedAt desc) {
  _id, title, "slug": slug.current, excerpt, category, author, publishedAt, readingTime, featured,
  "coverUrl": cover.asset->url, "coverAlt": cover.alt, body, seoTitle, seoDescription
}`;

export const POST_QUERY = `*[_type == "post" && slug.current == $slug && defined(publishedAt) && publishedAt <= $today][0] {
  _id, title, "slug": slug.current, excerpt, category, author, publishedAt, readingTime,
  "coverUrl": cover.asset->url, "coverAlt": cover.alt, body, seoTitle, seoDescription
}`;

export const BOOKS_QUERY = `*[_type == "book" && defined(slug.current)] | order(publishedAt desc) {
  _id, title, subtitle, "slug": slug.current, summary, description, author, publishedAt, featured,
  "coverUrl": cover.asset->url, "coverAlt": cover.alt, "pdfUrl": pdf.asset->url,
  freeDownload, price, currency, paymentProvider, paymentLabel, purchaseUrl, seoDescription
}`;

export const BOOK_QUERY = `*[_type == "book" && slug.current == $slug][0] {
  _id, title, subtitle, "slug": slug.current, summary, description, author, publishedAt, featured,
  "coverUrl": cover.asset->url, "coverAlt": cover.alt, "pdfUrl": pdf.asset->url,
  freeDownload, price, currency, paymentProvider, paymentLabel, purchaseUrl, seoDescription
}`;

export const SETTINGS_QUERY = `*[_type == "siteSettings"] | order(_updatedAt desc)[0] {
  title, tagline, heroEyebrow, heroTitle, heroDescription, authorName,
  "portraitUrl": portrait.asset->url, "heroBackgroundUrl": heroBackground.asset->url,
  "siteBackgroundUrl": siteBackground.asset->url,
  about, seoDescription, accentColor, contactEmail, socialLinks, footerNote
}`;
