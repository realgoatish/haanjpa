import { error } from '@sveltejs/kit';
import { PUBLIC_TEST_VAR } from '$env/static/public'

/** @type {import('./$types').PageLoad} */
export async function load() {

	const response = {
    testStaticPublic: PUBLIC_TEST_VAR
  }

	if (response) {
		return response;
	}

	throw error(404, 'Not found');
}
