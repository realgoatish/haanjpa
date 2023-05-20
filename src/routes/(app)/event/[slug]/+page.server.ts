import { error } from '@sveltejs/kit';
import { eventQuery } from '$lib/config/sanity/queries'
import { client } from '$lib/config/sanity/sanityClient.server'
import { processEventPage } from '$lib/js/processEndpoints.server'

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {

  console.log(`url.pathname in events/[slug]: ${url.pathname}`)
  console.log(`url.origin in events/[slug]: ${url.origin}`)

  const response = await client.fetch(eventQuery(url.pathname)).then(data => {

    return processEventPage(data)

  })

	if (response) {
		return response;
	}

	throw error(404, 'Not found');
}
