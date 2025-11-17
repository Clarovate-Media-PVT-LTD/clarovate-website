# Setup Guide

## Step-by-Step Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This will install:

- Next.js 14
- React 18
- TypeScript
- ESLint and Prettier
- All necessary type definitions

### 2. Environment Variables (Optional)

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
GOOGLE_VERIFICATION=your-verification-code
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

### 4. Build for Production

```bash
npm run build
npm start
```

## Project Structure Explained

### App Directory (App Router)

- `app/layout.tsx` - Root layout with global SEO metadata
- `app/page.tsx` - Home page (Server Component by default)
- `app/about/page.tsx` - About page demonstrating SSR
- `app/globals.css` - Global styles
- `app/not-found.tsx` - Custom 404 page

### Components Directory

All components are **Server Components by default**:

- `components/header.tsx` - Navigation header (Server Component)
- `components/footer.tsx` - Footer (Server Component)
- `components/interactive-counter.tsx` - Example Client Component (uses "use client")

## SSR vs Client Components

### Server Components (Default) ✅

- Run only on the server
- Can use async/await
- Can access databases, APIs, file system
- No JavaScript sent to client
- Better for SEO

**Example:**

```typescript
// app/page.tsx - Server Component (no "use client")
export default async function Page() {
  const data = await fetchData(); // Runs on server
  return <div>{data}</div>;
}
```

### Client Components (Only when needed) ⚠️

Use `"use client"` only when you need:

- React hooks (useState, useEffect, etc.)
- Browser APIs (window, document, etc.)
- Event handlers (onClick, onChange, etc.)

**Example:**

```typescript
// components/interactive-button.tsx
'use client';

import { useState } from 'react';

export function InteractiveButton() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

## SEO Best Practices

1. **Metadata**: Export `metadata` from each page
2. **Server Components**: Use Server Components for content
3. **Semantic HTML**: Use proper HTML5 elements
4. **Open Graph**: Configure in root layout
5. **Structured Data**: Add JSON-LD when needed

## Code Quality

- **ESLint**: Run `npm run lint` to check code
- **Prettier**: Run `npm run format` to format code
- **TypeScript**: Strict mode enabled for type safety

## Next Steps

1. Customize the metadata in `app/layout.tsx`
2. Add your own pages in the `app` directory
3. Create reusable Server Components in `components`
4. Add Client Components only when interactivity is needed
5. Configure your domain in environment variables
