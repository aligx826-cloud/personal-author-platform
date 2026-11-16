# Hussein Alawadi — Author Platform

Arabic-first Next.js author publishing platform project.

## Contact and social configuration

- WhatsApp number: edit `WHATSAPP_NUMBER` in `lib/social-links.ts`. It is currently configured for the supplied Iraqi number `07866345916` using WhatsApp's international format.
- WhatsApp greeting: edit `WHATSAPP_MESSAGE` in the same file.
- YouTube, TikTok, Instagram, X, LinkedIn, Facebook and Threads: edit the `url` values in `SOCIAL_LINKS`. Leave a value empty to hide that platform.
- Display controls: Arabic/English, light/dark appearance, and reading text size (90%–120%) are in `components/settings-menu.tsx`.

## Project source

The complete working Next.js project bundle is available in the accompanying ChatGPT delivery as `personal-author-platform-final.zip`. Extract the archive before running the app. The repository currently contains the contact/settings integration source files; it is not yet a complete standalone Vercel deployment repository.

## Local setup (after extracting the full bundle)

- Node.js 20.9+
- `npm install`
- Copy `.env.example` to `.env.local`
- `npm run dev`

See `دليل-التشغيل.md` in the full project bundle for Sanity, Disfora and Vercel setup.
