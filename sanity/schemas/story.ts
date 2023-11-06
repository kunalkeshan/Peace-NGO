import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'story',
	title: 'Story',
	type: 'document',
	groups: [
		{
			name: 'social',
			title: 'Social Links',
		},
		{
			name: 'media',
			title: 'Media',
		},
	],
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			description: 'The name of the person providing the story.',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'story',
			title: 'Their Story',
			type: 'text',
			description: 'The story or review text provided by the person.',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			description: 'An image of the person providing the testimonial.',
			validation: (Rule) => Rule.required(),
			options: {
				hotspot: true,
			},
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
			group: 'media',
		}),
		defineField({
			name: 'role',
			title: 'Role',
			type: 'string',
			description:
				'The role or position of the person (e.g., CEO, Customer).',
		}),
		defineField({
			name: 'instagram',
			title: 'Instagram Profile',
			type: 'url',
			group: 'social',
			description: 'The individuals Instagram profile URL.',
		}),
		defineField({
			name: 'twitter',
			title: 'Twitter Profile',
			type: 'url',
			group: 'social',
			description: 'The individuals Twitter profile URL.',
		}),
		defineField({
			name: 'linkedin',
			title: 'LinkedIn Profile',
			type: 'url',
			group: 'social',
			description: 'The individuals LinkedIn profile URL.',
		}),
		defineField({
			name: 'website',
			title: 'Website',
			type: 'url',
			group: 'social',
			description:
				'The individuals personal or professional website URL.',
		}),
		defineField({
			name: 'email',
			title: 'Email',
			type: 'string',
			group: 'social',
			description: 'The individuals contact email address.',
		}),
		defineField({
			name: 'youtube',
			title: 'YouTube',
			type: 'url',
			group: 'social',
			description: 'The individuals YouTube channel URL.',
		}),
	],
});
