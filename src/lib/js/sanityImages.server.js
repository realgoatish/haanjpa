import { SANITY_PROJECT_ID, SANITY_DATASET, SANITY_BASE_IMAGE_URL } from '$env/static/private';

// turn sanity image ref into the actual name of the image stored in sanity
const processImageRef = (imageRef) => {
	const unprocessedImageUrl = imageRef;

	const lastIndexOfDash = unprocessedImageUrl.lastIndexOf('-');

	const replacement = '.';

	const dashReplacedWithDot =
		unprocessedImageUrl.substring(0, lastIndexOfDash) +
		replacement +
		unprocessedImageUrl.substring(lastIndexOfDash + 1);

	const strippedPrefix = dashReplacedWithDot.replace('image-', '');

	return strippedPrefix;
};

export const processBlockImageUrls = (imageObjects) => {
	const newImageObjects = imageObjects.map((item) => {
		const sanityImageUrl = `${SANITY_BASE_IMAGE_URL}/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${processImageRef(
			item.image.asset._ref
		)}`;

		const newImageAttribute = {
			mobile: `${sanityImageUrl}?w=800&auto=format`,
			tablet: `${sanityImageUrl}?w=1600&auto=format`,
			desktop: `${sanityImageUrl}?w=2400&auto=format`,
			fullSize: `${sanityImageUrl}?auto=format`,
			sourceImage: `${sanityImageUrl}`
		};

		return {
			// can't strip out everything but alt & image attrs because PortableText component needs
			// _key & _type attrs too
			...item,
			image: newImageAttribute
		};
	});

	return newImageObjects;
};

export const processOgImageUrls = (ogImageObject) => {
	const sanityImageUrl = `${SANITY_BASE_IMAGE_URL}/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${processImageRef(
		ogImageObject.image.asset._ref
	)}`;

	const newImageAttribute = {
		twitter: `${sanityImageUrl}?w=800&h=418&auto=format`,
		facebook: `${sanityImageUrl}?w=1200&h=630&auto=format`,
		fullSize: `${sanityImageUrl}?auto=format`,
		sourceImage: `${sanityImageUrl}`
	};

	return {
		// TODO this comment does not apply here since these images aren't used in page body
		// can't strip out everything but alt & image attrs because PortableText component needs
		// _key & _type attrs too
		...ogImageObject,
		image: newImageAttribute
	};
};
