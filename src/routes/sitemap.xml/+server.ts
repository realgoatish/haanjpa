import { sitemapQuery } from '$lib/js/sanityQueries.server.js'
import { client } from '$lib/js/sanityClient.server.js'

export async function GET({url}) {

  const sitemapQueryResponse = await client.fetch(sitemapQuery())

  return new Response(
    `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    ${sitemapQueryResponse.map(item => `
      <url>
        <loc>${url.origin}${item.slug.current}</loc>
        <priority>0.85</priority>
      </url>`).join("")}
    </urlset>`.trim(),
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  )
}