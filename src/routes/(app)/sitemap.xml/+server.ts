import { sitemapQuery } from '$lib/config/sanity/queries.js'
import { client } from '$lib/config/sanity/sanityClient.server.js'

export async function GET({url}) {

  const sitemapQueryResponse = await client.fetch(sitemapQuery())

  // TODO - you need to include image:loc tags for images on pages. also find a way to associate images with slugs
  // in the CMS so we don't have to keep wrangling with this
  return new Response(
    `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    ${sitemapQueryResponse.map(item => `
      <url>
        <loc>${url.origin}${item.slug}</loc>
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