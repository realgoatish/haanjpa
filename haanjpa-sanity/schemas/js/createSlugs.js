import slug from 'slug';

function formatSlug(input, slugStart) {
	const theSlug = slug(input, { lower: true });
	return slugStart + theSlug;
}

export function slugWithType() {
	return {
		name: `slug`,
		type: `slug`,
		options: {
			source: (doc) => `${doc.event ? '/event/' : ''}${doc.title}/`,
			slugify: (value) => formatSlug(value)
		},
		validation: (Rule) =>
			Rule.required().custom(({ current }, context) => {
				if (typeof current === 'undefined') {
					return true;
				}

				if (current && context.document.event) {
					if (!current.startsWith('/event/')) {
						return `Slug must begin with "/event/". Click "Generate" to reset.`;
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
}
