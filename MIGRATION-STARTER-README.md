# LocalKokani migration starter

This archive includes the original LocalKokani source plus starter data modules and a WhatsApp URL helper.

**Important: this is not yet a fully migrated, production-ready build.** The original Firebase/Cloudinary integrations and admin/owner routes are intentionally retained so the project is not left in a broken intermediate state. Do not deploy this as the completed migration.

## Intended setup
- Manually maintained content in `src/data/`
- Local images under `public/images/`
- WhatsApp click-to-chat for enquiries
- Hostinger Node.js hosting for the Next.js app

## Starter files added
- `src/data/hotels.js`
- `src/data/destinations.js`
- `src/data/restaurants.js`
- `src/data/blogPosts.js`
- `src/data/landingPages.js`
- `src/data/siteSettings.js`
- `src/lib/whatsapp.js`

## Remaining migration work
1. Refactor each `src/lib/services/*Service.js` to read the local data modules while preserving the exports and data shapes used by public pages.
2. Update all public image references and remove Cloudinary image helpers/configuration.
3. Replace enquiry form persistence with WhatsApp links and remove Firebase writes.
4. Remove admin/owner routes and components only after checking their imports and route dependencies.
5. Remove Firebase/Cloudinary packages and environment variables only after no imports remain.
6. Run `npm run build`, resolve errors, and test all public routes before deployment.

## WhatsApp configuration
Edit `src/data/siteSettings.js` and replace `91XXXXXXXXXX` with your WhatsApp number in international format, digits only (for India, start with `91`). Do not include `+`, spaces, or hyphens.

## Manual image conventions
Place images in the existing `public/images/` tree and reference them with root-relative paths, e.g. `/images/hotels/example/cover.webp`. Optimize images before adding them.
