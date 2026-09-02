import type { NextRequest } from 'next/server'

export function GET(request: NextRequest) {
  return Response.json(
    {
      message: 'API reached the legacy origin',
      cookie: request.cookies.get('vercel-origin-proxy')?.value ?? null,
    },
    {
      headers: {
        'Cache-Control': 'private, no-store',
      },
    },
  )
}
