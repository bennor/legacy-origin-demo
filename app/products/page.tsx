import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Products',
}

export default function ProductsPage() {
  return (
    <main>
      <p className="eyebrow">Catalog</p>
      <h1>Products from another URL.</h1>
      <div className="cards">
        <Link className="card" href="/products/widget">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/widget.svg" alt="Blue widget" />
          <h2>Blue Widget</h2>
          <p>Open the detail page and load its second JavaScript bundle.</p>
        </Link>
      </div>
    </main>
  )
}
