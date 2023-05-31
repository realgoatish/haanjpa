import { sitemapQuery } from '$lib/config/sanity/queries.js'
import { client } from '$lib/config/sanity/sanityClient.server.js'

export async function GET({url}) {

  const sitemapQueryResponse = await client.fetch(sitemapQuery())

  console.log(`sitemapQueryResponse: ${JSON.stringify(sitemapQueryResponse, null, 2)}`)

  // TODO - you need to include image:loc tags for images on pages. also find a way to associate images with slugs
  // in the CMS so we don't have to keep wrangling with this
  return new Response(
    `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    ${sitemapQueryResponse.map(item => {
      let flatImages = []
      // Sanity can't return a flat array of images queried from different depths & custom types, so we flatten all page images here
      flatImages = [...item.bodyEventImages, ...item.bodyImages]
      return `
      <url>
        <loc>${url.origin}${item.slug}</loc>
        <priority>0.85</priority>
        ${flatImages.map(image => {
          return `        
          <image:image>
            <image:loc>${image}</image:loc>
          </image:image>
          `
        })}
      </url>`
    }).join("")}
    </urlset>`.trim(),
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  )
}