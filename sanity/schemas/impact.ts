import { defineField, defineType } from 'sanity';

const IMPACT_CATEGORY = ['Education', 'Trees', 'Health', 'Women Empowerment'];

export default defineType({
	name: 'impact',
	title: 'Impact Created',
	type: 'document',

	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			description:
				'This is where you add a title for the impact item. It helps to briefly identify the impact event or initiative.',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'category',
			title: 'Category',
			type: 'reference',
			to: { type: 'category' },
			description: `Choose the relevant category from the list provided. Select the category that best describes the area or field where the impact was created. Options include ${IMPACT_CATEGORY.join(
				', '
			)}`,
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'number',
			title: 'Impact Number',
			description:
				'Specify the number that represents the impact created. This could be the number of people affected, the quantity of items produced, or any other quantifiable metric.',
			type: 'number',
			validation: (Rule) => Rule.required().integer(),
		}),
		defineField({
			name: 'description',
			title: 'Impact Description',
			description:
				'Use this space to provide a detailed description of the impact created. Explain the significance, outcomes, and details of the impact event or initiative.',
			type: 'text',
			validation: (Rule) => Rule.max(500),
		}),
	],
});
