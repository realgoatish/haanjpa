import { error } from '@sveltejs/kit';
import { slugQuery } from '$lib/js/sanityQueries.server'
import { client } from '$lib/js/sanityClient.server'

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {

  console.log(`url.pathname in /[slug]/+page.server: ${url.pathname}`)
  console.log(`url.origin in /[slug]/+page.server: ${url.origin}`)

	const response = await client.fetch(slugQuery(url.pathname))

	if (response) {
		return response;
	}

	throw error(404, 'Not found');
}
