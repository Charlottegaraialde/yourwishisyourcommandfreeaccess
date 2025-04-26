import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  if (request.url.endsWith('/sitemap.xml')) {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.yourwishfreeaccess.com/</loc>
    <lastmod>2024-04-26</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.yourwishfreeaccess.com/testimonials</loc>
    <lastmod>2024-04-26</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/sitemap.xml',
}; 