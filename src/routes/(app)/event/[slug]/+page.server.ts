import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { eventPageQuery, eventPagePreviewQuery } from '$lib/config/sanity/queries'
import { getSanityServerClient } from '$lib/config/sanity/sanityClient.server'
import { processEventPage } from '$lib/js/processEndpoints.server'

export const load: PageServerLoad = async ({ parent, url }) => {
  const { previewMode } = await parent()

  let response

  if (previewMode) {
    response = await getSanityServerClient(previewMode).fetch(eventPagePreviewQuery, {
      slug: url.pathname
    })
  } else if (!previewMode) {
    response = await getSanityServerClient(previewMode).fetch(eventPageQuery, {
      slug: url.pathname
    })
  }

  if (!response) {
    throw error(404, 'Event Page not found');
  }

  const processedResponse = processEventPage(response)

  // SK adds stuff from the layout to this obj for us
  return {
    previewMode,
    slug: response?.slug || '/',
    initialData: processedResponse
  }
}