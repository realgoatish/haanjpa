import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas/schema';
import deskStructure from './deskStructure';

export default defineConfig({
	name: 'haanjpa',
	title: 'haanjpa',
	projectId: '78gybhkq',
	dataset: 'haanjpa-dataset',
	plugins: [
		deskTool({
			structure: deskStructure
		}),
		visionTool()
	],
	schema: {
		types: schemaTypes
	}
});
