import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="hero">
      <div>
        <p className="eyebrow">Dummy legacy origin</p>
        <h1>A small site behind the rewrite.</h1>
        <p>This HTML, image, CSS, JavaScript, and API request can all pass through the proxy project.</p>
        <Link className="button" href="/products">Browse products</Link>
      </div>
      {/* Raw image URLs are intentional so the proxy demo exercises asset rewrites. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/hero.svg" alt="Abstract legacy server illustration" />
    </main>
  )
}
