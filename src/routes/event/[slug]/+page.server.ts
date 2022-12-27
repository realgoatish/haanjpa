import { error } from '@sveltejs/kit';
import { eventQuery } from '$lib/js/sanityQueries.server'
import { client } from '$lib/js/sanityClient.server'
import { processBlockImageUrls } from '$lib/js/sanityImages.server'

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {

  console.log(`url.pathname in events/[slug]: ${url.pathname}`)
  console.log(`url.origin in events/[slug]: ${url.origin}`)

  const response = await client.fetch(eventQuery(url.pathname)).then(data => {

    const mutableData = data

    const processedDescriptions = mutableData?.body?.map((section) => {

      const descriptionImages = section?.description?.filter((item) => item?._type === 'figure' && item?.image)

      if (!descriptionImages?.length) {
        return section
      }

      console.log(`descriptionImages before transformation: ${JSON.stringify(descriptionImages, null, 2)}`)

      const processedDescriptionImages = processBlockImageUrls(descriptionImages)

      console.log(`processedDescriptionImages after transformation: ${JSON.stringify(processedDescriptionImages, null, 2)}`)

      section.description = section.description.map((obj) => processedDescriptionImages.find((o) => o._key === obj._key) || obj)

      return section

    })

    const newBody = mutableData?.body?.map((obj) => processedDescriptions.find((o) => o._key === obj._key) || obj);

    mutableData.body = newBody

    console.log(`DATA: ${JSON.stringify(mutableData, null, 2)}`)

    return mutableData
  })

	if (response) {
		return response;
	}

	throw error(404, 'Not found');
}
