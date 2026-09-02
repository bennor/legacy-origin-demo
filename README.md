# Legacy origin demo

A zero-build static site used as the external origin for the [cookie rewrite proxy example](https://github.com/bennor/cookie-rewrite-proxy). It has no framework, package manager, or server-side runtime.

The site includes:

- Plain HTML at `/`, `/products`, and `/products/widget`.
- JavaScript and CSS under `/assets`.
- SVG images under `/images`.
- A static JSON response at `/api/message.json`.

`vercel.json` sets the framework preset to `null` and enables clean URLs for the HTML files.
