import { error } from '@sveltejs/kit';
import sanityClient from "@sanity/client";
import { SANITY_WEBSITE_TOKEN } from '$env/static/private'


const client = sanityClient({
  projectId: "78gybhkq",
  dataset: "haanjpa-dataset",
  apiVersion: "2022-09-01",
  token: SANITY_WEBSITE_TOKEN,
  useCdn: false
});

/** @type {import('./$types').PageServerLoad} */
export async function load() {

	const response = await client.fetch(`*[_type == "page" && title == "Home"]{
    "pageTitle": title,
    "pageDescription": description,
    "pageBody": body[]{
      ...,
      _type == 'figure' => {
        ...,
        "url": image.asset->url
      },
      _type == 'navigation' => {
        title,
        items[]{
          text,
          description,
          "slug": navigationItemUrl.internalLink->slug.current
        }
      }
    }
  }[0]`)

	if (response) {
		return response;
	}

	throw error(404, 'Not found');
}
