import { error } from '@sveltejs/kit';
import sanityClient from "@sanity/client";
import { SANITY_WEBSITE_TOKEN, SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_VERSION } from '$env/static/private'
import { aboutPageQuery } from '$lib/js/sanityQueries'


const client = sanityClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  token: SANITY_WEBSITE_TOKEN,
  useCdn: false
});

/** @type {import('./$types').PageLoad} */
export async function load() {

	const response = await client.fetch(aboutPageQuery)

	if (response) {
		return response;
	}

	throw error(404, 'Not found');
}
