import { error } from '@sveltejs/kit';
import { layoutQuery } from '$lib/config/sanity/queries';
import { getSanityServerClient } from '$lib/config/sanity/sanityClient.server'
import { processLayout } from '$lib/js/processEndpoints.server'
import type { PageServerLoad } from './$types';

export const trailingSlash = 'always'

export const load: PageServerLoad = async ({ locals: { previewMode }, url }) => {

  const isPreview = previewMode && url.searchParams.get('isPreview') === 'true'

  const response = await getSanityServerClient(false).fetch(layoutQuery).then(data => {


    const processedResponse = processLayout(data)

    return processedResponse

  })

	if (!response) {
    throw error(404, 'Global Layout not found WEASEL WEASEL');
  }

  return {
    ...response,
    previewModeEmbed: isPreview,
    previewMode
  }

}
