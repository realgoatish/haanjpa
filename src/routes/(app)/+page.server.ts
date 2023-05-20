import { error } from '@sveltejs/kit';
import { homePageQuery } from '$lib/config/sanity/queries'
import { client } from '$lib/config/sanity/sanityClient.server'
import { processPage } from '$lib/js/processEndpoints.server'


/** @type {import('./$types').PageServerLoad} */
export async function load() {

  const response = await client.fetch(homePageQuery).then(data => {

    return processPage(data)
  })

	if (response) {
		return response;
	}

	throw error(404, 'Not found');
}
