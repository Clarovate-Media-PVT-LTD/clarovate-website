# Clarovate Next.js Website

A Next.js application optimized for Server-Side Rendering (SSR) and SEO, with minimal client-side JavaScript.

## Features

- ✅ **Server-Side Rendering (SSR)** - All pages are rendered on the server by default
- ✅ **SEO Optimized** - Comprehensive metadata, Open Graph, and Twitter Card support
- ✅ **Minimal Client Components** - Uses "use client" only when absolutely necessary
- ✅ **TypeScript** - Full type safety throughout the application
- ✅ **Code Quality** - ESLint and Prettier configured
- ✅ **Modern Stack** - Next.js 14 with App Router

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Create a `.env.local` file (optional) for environment variables:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
GOOGLE_VERIFICATION=your-google-verification-code
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
clarovate-next-website/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Home page (SSR)
│   ├── globals.css        # Global styles
│   ├── about/             # About page route
│   │   └── page.tsx
│   └── not-found.tsx      # 404 page
├── components/             # Reusable components (Server Components by default)
│   ├── header.tsx
│   └── footer.tsx
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── .eslintrc.json         # ESLint configuration
├── .prettierrc            # Prettier configuration
└── package.json
```

## SSR Best Practices

### Server Components (Default)

All components in the `app` directory and `components` directory are Server Components by default. They:

- Run only on the server
- Can directly access backend resources
- Reduce JavaScript bundle size
- Improve initial page load performance

### When to Use "use client"

Only use `"use client"` when you need:

- React hooks (useState, useEffect, etc.)
- Browser-only APIs (window, document, etc.)
- Event listeners (onClick, onChange, etc.)
- Third-party libraries that require client-side JavaScript

### Example: Converting to Client Component

If you need interactivity, create a separate client component:

```typescript
// components/interactive-button.tsx
'use client';

import { useState } from 'react';

export function InteractiveButton(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

Then use it in your Server Component:

```typescript
// app/page.tsx
import { InteractiveButton } from '@/components/interactive-button';

export default function Page(): JSX.Element {
  return (
    <div>
      <h1>My Page</h1>
      <InteractiveButton />
    </div>
  );
}
```

## SEO Configuration

### Metadata

Each page can export metadata for SEO:

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description for SEO',
  openGraph: {
    title: 'Page Title',
    description: 'Page description',
  },
};
```

### Dynamic Metadata

For dynamic routes, use `generateMetadata`:

```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const data = await fetchData(params.id);

  return {
    title: data.title,
    description: data.description,
  };
}
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Building for Production

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file for local development:

- `NEXT_PUBLIC_SITE_URL` - Your site URL (for metadata)
- `GOOGLE_VERIFICATION` - Google Search Console verification code

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)

## License

Private - All rights reserved
