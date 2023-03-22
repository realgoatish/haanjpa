import { error } from '@sveltejs/kit';
import { homePageQuery } from '$lib/js/sanityQueries.server'
import { client } from '$lib/js/sanityClient.server'
import { processOgImageUrls } from '$lib/js/sanityImages.server'

/** @type {import('./$types').PageServerLoad} */
export async function load() {

	// const response = await client.fetch(homePageQuery)
  const response = await client.fetch(homePageQuery).then(data => {
    const processedOgImages = processOgImageUrls(data.ogImage)

    data.ogImage = processedOgImages

    return data
  })

	if (response) {
		return response;
	}

	throw error(404, 'Not found');
}
