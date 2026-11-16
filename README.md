# Hussein Alawadi — Author Platform

Arabic-first Next.js 16 publishing platform with Sanity Studio, bilingual interface, theme controls, and configurable contact/social links.

## Complete source bundle

Download `personal-author-platform-source.zip` from this repository and extract it. The archive contains the full Next.js application, Sanity schemas, components, assets, setup guide and environment template.

## Contact and social links

Edit `lib/social-links.ts` to update WhatsApp contact number/message and all seven social profile URLs. Leave a social URL empty to hide it.

## Local setup

- Node.js 20.9+
- `npm install`
- Copy `.env.example` to `.env.local`
- `npm run dev`

Open `http://localhost:3000`. See `دليل-التشغيل.md` for Sanity, Disfora and Vercel configuration.

The GitHub repository contains the source bundle as a ZIP; extract it to a working directory before importing the app into Vercel.