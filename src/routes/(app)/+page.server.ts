import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { homePageQuery, homePagePreviewQuery } from '$lib/config/sanity/queries'
import { getSanityServerClient } from '$lib/config/sanity/sanityClient.server'
import { processPage } from '$lib/js/processEndpoints.server'

export const load: PageServerLoad = async ({ parent }) => {
  const { previewMode } = await parent()

  let response

  if (previewMode) {
    response = await getSanityServerClient(previewMode).fetch(homePagePreviewQuery)
    console.log(`previewMode query fired!!!!!!`)
  } else if (!previewMode) {
    response = await getSanityServerClient(previewMode).fetch(homePageQuery)
    console.log(`regular homepage query fired!!!!!!`)
  }

  if (!response) {
    throw error(404, 'Home Page not found');
  }

  const processedResponse = processPage(response)

  // SK adds stuff from the layout to this obj for us
  return {
    previewMode,
    slug: response?.slug || '/',
    initialData: processedResponse
  }
}



// /** @type {import('./$types').PageServerLoad} */
// export async function load() {

//   const response = await client.fetch(homePageQuery).then(data => {

//     return processPage(data)
//   })

// 	if (response) {
// 		return response;
// 	}

// 	throw error(404, 'Not found');
// }
