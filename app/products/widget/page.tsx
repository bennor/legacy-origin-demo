import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Blue Widget',
}

export default function WidgetPage() {
  return (
    <main className="product">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/widget.svg" alt="Blue widget" />
      <div>
        <p className="eyebrow">Product detail</p>
        <h1>Blue Widget</h1>
        <p>This route loads <code>/assets/product.js</code> as well as the shared bundle.</p>
        <button id="product-action" type="button">Run product JavaScript</button>
        <p id="product-result" aria-live="polite" />
      </div>
      <Script src="/assets/product.js" strategy="afterInteractive" />
    </main>
  )
}
