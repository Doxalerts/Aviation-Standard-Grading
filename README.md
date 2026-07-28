# Aviation Standard Grading — Full Rebuild

This replaces the previous screenshot-and-hotspot homepage with a real responsive Next.js website.

## Included

- Responsive multi-page website
- Homepage, grading standard, process, pricing, cert lookup, about, contact, and waitlist
- Dynamic certification URLs: `/cert/[certNumber]`
- Existing demonstration cert retained as `ASG-000001`
- Mobile navigation
- SEO metadata, sitemap, and robots file
- Existing ASG visual assets reused from the original repository

## Local development

```bash
npm install
npm run dev
```

## Deploy

Replace the files in the existing GitHub repository, commit to `main`, and Vercel should deploy automatically if it is still connected to that repository.

## Adding certification records

Edit `lib/certs.ts`. Add a record to `certificationRecords`, including any accepted aliases.

## Important

The waitlist form opens a prefilled email to `info@aviationstandardgrading.com`. It does not claim to store submissions in a database. A database-backed form can be added later when the final email/database provider is chosen.
