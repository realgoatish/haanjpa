// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import siteSettings from './documents/siteSettings';
import richText from './arrays/richText';
import person from './documents/person';
import page from './documents/page';
import navigation from './objects/navigation';
import navigationItem from './objects/navItem';
import link from './objects/link';
import event from './objects/event';
import figure from './objects/figure';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: 'default',
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		/* Your types here! */
		siteSettings,
		richText,
		person,
		page,
		navigation,
		navigationItem,
		link,
		event,
		figure
	])
});
