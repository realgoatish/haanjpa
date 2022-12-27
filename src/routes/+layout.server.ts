import { error } from '@sveltejs/kit';
import {
	SANITY_PROJECT_ID,
	SANITY_DATASET
} from '$env/static/private';
import { layoutQuery } from '$lib/js/sanityQueries.server';
import { client } from '$lib/js/sanityClient.server'

export const trailingSlash = 'always'
export const csr = false

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {

	const response = await client.fetch(layoutQuery()).then(data => {
    const { unprocessedImageUrl } = data.logo

    const lastIndexOfDash = unprocessedImageUrl.lastIndexOf('-')

    const replacement = '.'

    const dashReplacedWithDot = unprocessedImageUrl.substring(0, lastIndexOfDash) + replacement + unprocessedImageUrl.substring(lastIndexOfDash + 1)

    const strippedPrefix = dashReplacedWithDot.replace('image-', '')

    const sanityImageUrl = `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${strippedPrefix}`

    // console.log(sanityImageUrl)

    const newLogo = {
      alt: data.logo.alt,
      images: {
        mobile: `${sanityImageUrl}?w=200&auto=format`,
        tablet: `${sanityImageUrl}?w=400&auto=format`,
        fullSize: `${sanityImageUrl}?auto=format`
      }
    }

    const { description, navigationSections, title } = data

    const processedData = {
      title,
      description,
      logo: newLogo,
      navigationSections
    }

    return processedData
    
  });

  if (response) {
    return response;
  }

	throw error(404, 'Not found');

}
