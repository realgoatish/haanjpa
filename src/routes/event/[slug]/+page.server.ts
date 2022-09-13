import { error } from '@sveltejs/kit';
import sanityClient from "@sanity/client";
import { SANITY_WEBSITE_TOKEN, SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_VERSION } from '$env/static/private'
import { eventQuery } from '$lib/js/sanityQueries'


const client = sanityClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  token: SANITY_WEBSITE_TOKEN,
  useCdn: false
});

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
