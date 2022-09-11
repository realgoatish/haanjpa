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
export async function load({ params }) {

	const response = await client.fetch(eventQuery(params.slug))

	if (response) {
		return response;
	}

	throw error(404, 'Not found');
}
