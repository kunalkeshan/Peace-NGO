import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'program',
	title: 'Programs',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			description:
				'The title of the program. This will be displayed prominently.',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			description: 'The user-friendly part of the URL for this program.',
			options: {
				source: 'title',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			description:
				'A detailed description of the program and its objectives.',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			description:
				'An image representing the program. It visually identifies the program.',
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative Text',
					description:
						'A descriptive alternative text for the image.',
					validation: (Rule) => Rule.required(),
				},
			],
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		}),
	],
});
