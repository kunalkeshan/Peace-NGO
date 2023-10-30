import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';
import category from './schemas/category';
import post from './schemas/post';
import team from './schemas/team';
import story from './schemas/story';
import impact from './schemas/impact';
import gallery from './schemas/gallery';
import program from './schemas/program';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		post,
		team,
		category,
		blockContent,
		story,
		impact,
		gallery,
		program,
	],
};
