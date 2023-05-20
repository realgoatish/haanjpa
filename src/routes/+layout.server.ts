import { error } from '@sveltejs/kit';
// import {
// 	SANITY_PROJECT_ID,
// 	SANITY_DATASET
// } from '$env/static/private';
import { layoutQuery } from '$lib/js/sanityQueries.server';
import { client } from '$lib/js/sanityClient.server'
import { processLayout } from '$lib/js/processEndpoints.server'

export const trailingSlash = 'always'
// export const csr = false

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {

  const response = await client.fetch(layoutQuery()).then(data => {
    
    return processLayout(data)
    
  });

  if (response) {
    return response;
  }

	throw error(404, 'Not found');

}
