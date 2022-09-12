import slug from 'slug';

function formatSlug(input, slugStart) {
	const theSlug = slug(input, { lower: true });
	return slugStart + theSlug;
}

// export function slugWithType(prefix = ``, source = `title`) {
export function slugWithType() {
	// const slugStart = prefix ? `/${prefix}/` : `/`;

	return {
		name: `slug`,
		type: `slug`,
		options: {
			source: (doc) => `${doc.event ? '/events/' : ''}${doc.title}/`,
			slugify: (value) => formatSlug(value)
		},
		validation: (Rule) =>
			Rule.required().custom(({ current }, context) => {
				if (typeof current === 'undefined') {
					return true;
				}

				if (current && context.document.event) {
					if (!current.startsWith('/events/')) {
						return `Slug must begin with "/events/". Click "Generate" to reset.`;
					}

					if (!current.endsWith('/')) {
						return `Slug must end with "/"`;
					}
				}

				if (current && !context.document.event) {
					if (context.document.title !== 'Home') {
						if (!current.startsWith('/')) {
							return `Slug must begin with "/". Click "Generate" to reset.`;
						}

						if (!current.endsWith('/')) {
							return `Slug must end with "/"`;
						}
					}
				}

				return true;
			})
	};

	// return {
	// 	name: `slug`,
	// 	type: `slug`,
	// 	options: {
	// 		source,
	// 		slugify: (value) => formatSlug(value, slugStart)
	// 	},
	// 	validation: (Rule) =>
	// 		Rule.required().custom(({ current }) => {
	// 			if (typeof current === 'undefined') {
	// 				return true;
	// 			}

	// 			if (current) {
	// 				if (!current.startsWith(slugStart)) {
	// 					return `Slug must begin with "${slugStart}". Click "Generate" to reset.`;
	// 				}

	// 				if (current.slice(slugStart.length).split('').includes('/')) {
	// 					return `Slug cannot have another "/" after "${slugStart}"`;
	// 				}

	// 				if (current === slugStart) {
	// 					return `Slug cannot be empty`;
	// 				}

	// 				if (current.endsWith('/')) {
	// 					return `Slug cannot end with "/"`;
	// 				}
	// 			}

	// 			return true;
	// 		})
	// };
}
