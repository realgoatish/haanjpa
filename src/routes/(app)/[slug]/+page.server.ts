import { error } from '@sveltejs/kit';
import { slugPageQuery } from '$lib/config/sanity/queries'
import { client } from '$lib/config/sanity/sanityClient.server'
import { processPage } from '$lib/js/processEndpoints.server'

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, params }) {

  console.log(`url.pathname in /[slug]/+page.server: ${url.pathname}`)
  console.log(`url.origin in /[slug]/+page.server: ${url.origin}`)

  const slug = params?.slug

  console.log(`slug in /[slug]/+page.server: ${slug}`)

  const response = await client.fetch(slugPageQuery, {
    slug: `/${slug}/`
  }).then(data => {

    return processPage(data)

  })

	if (response) {
		return response;
	}

	throw error(404, 'Not found');
}
