import { error } from '@sveltejs/kit';
import { eventQuery } from '$lib/js/sanityQueries'
import { client } from '$lib/js/sanityClient'
import { processBlockImageUrls } from '$lib/js/sanityImages'

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {

  console.log(`url.pathname in events/[slug]: ${url.pathname}`)
  console.log(`url.origin in events/[slug]: ${url.origin}`)

  const response = await client.fetch(eventQuery(url.pathname)).then(data => {

    // const imageObjects = data?.body?.reduce((acc, cv) => {
    //   if (cv.description) {
    //     const hasImage = cv.description.find((item) => item?._type === 'figure' && item?.image)
    //     acc.push(hasImage)
    //   }
    //   return acc
    // }, [])
  
    // if (!imageObjects?.length) {
    //   return data;
    // }

    // const processedDescriptions = data?.body?.filter((item) => item?.description?.find((child) => child?._type === 'figure' && child?.image))

    const processedDescriptions = data?.body?.map((section) => {
      // get the image object(s) from section.description
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


    // console.log(`imageObjects before transformation: ${JSON.stringify(imageObjects, null, 2)}`)

    // const processedBlockImages = processBlockImageUrls(imageObjects)

    // console.log(`processedBlockImages after transformation: ${JSON.stringify(processedBlockImages, null, 2)}`)

    // replace the image objects with matching _key properties on the cloned response
    // body with the new ones you just created
    // TODO the transformation above is working, but putting it onto the body here isn't
    const newBody = data.body.map((obj) => processedDescriptions.find((o) => o._key === obj._key) || obj);

    data.body = newBody

    return data
  })

	if (response) {
		return response;
	}

	throw error(404, 'Not found');
}
