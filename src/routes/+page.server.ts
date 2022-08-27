import { error } from '@sveltejs/kit';
import { TEST_VAR } from '$env/static/private'

/** @type {import('./$types').PageServerLoad} */
export async function load() {

	const response = {
    testStaticPrivate: TEST_VAR,
  }

	if (response) {
		return response;
	}

	throw error(404, 'Not found');
}
