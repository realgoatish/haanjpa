import { error } from '@sveltejs/kit';
import { eventPageQuery } from '$lib/config/sanity/queries'
import { client } from '$lib/config/sanity/sanityClient.server'
import { processEventPage } from '$lib/js/processEndpoints.server'

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, params }) {

  console.log(`url.pathname in event/[slug]: ${url.pathname}`)
  console.log(`url.origin in event/[slug]: ${url.origin}`)

  // const slug = params?.slug

  console.log(`params in event/[slug]: ${JSON.stringify(params)}`)

  const response = await client.fetch(eventPageQuery, {
    slug: url.pathname
  }).then(data => {

    return processEventPage(data)

  })

	if (response) {
		return response;
	}

	throw error(404, 'Not found');
}
