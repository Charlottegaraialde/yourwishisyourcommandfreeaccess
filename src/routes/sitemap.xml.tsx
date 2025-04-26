import { useEffect } from 'react';

export default function Sitemap() {
  useEffect(() => {
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

    // Set content type to XML
    const headers = new Headers();
    headers.set('Content-Type', 'application/xml');
    
    // Return XML response
    return new Response(sitemap, {
      headers,
      status: 200
    });
  }, []);

  return null;
} 