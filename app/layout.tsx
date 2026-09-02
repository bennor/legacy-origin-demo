import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import type { ReactNode } from 'react'
import { cookies } from 'next/headers'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Legacy Supply Co.',
    template: '%s | Legacy Supply Co.',
  },
  description: 'A dummy legacy origin for testing external rewrites.',
}

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const cookieStore = await cookies()
  const proxyCookie = cookieStore.get('vercel-origin-proxy')?.value

  return (
    <html lang="en">
      <body>
        <header>
          <Link className="brand" href="/">Legacy Supply Co.</Link>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/products/widget">Widget</Link>
            <a href="/vercel">Local proxy page</a>
          </nav>
        </header>
        {children}
        <footer>
          <p>Origin received cookie: <code>{proxyCookie ?? '(none)'}</code></p>
          <p id="api-status">Waiting for JavaScript...</p>
        </footer>
        <Script src="/assets/site.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
