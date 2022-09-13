import { error } from '@sveltejs/kit';
import { eventQuery } from '$lib/js/sanityQueries'
import { client } from '$lib/js/sanityClient'

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {

  console.log(`url.pathname in events/[slug]: ${url.pathname}`)
  console.log(`url.origin in events/[slug]: ${url.origin}`)

	const response = await client.fetch(eventQuery(url.pathname))

	if (response) {
		return response;
	}

	throw error(404, 'Not found');
}
