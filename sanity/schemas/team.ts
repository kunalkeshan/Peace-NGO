import {
	Globe,
	Instagram,
	Linkedin,
	Mail,
	Twitter,
	Youtube,
} from 'lucide-react';
import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'team',
	title: 'Team',
	type: 'document',
	groups: [
		{
			name: 'professional',
			title: 'Professional Details',
		},
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
			description:
				'The full name of the team member. This is how the team member will be identified.',
			validation: (Rule) => Rule.required(),
			group: 'professional',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			description:
				"A unique identifier used for generating user-friendly URLs. It's automatically derived from the name.",
			options: {
				source: 'name',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			description:
				'A 160 characters description to introduce what the blog post is about.',
			type: 'text',
			validation: (Rule) => Rule.required().max(160),
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			description:
				'An image representing the team member. This could be a profile picture or a photo.',
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
			name: 'bio',
			title: 'Bio',
			type: 'text',
			group: 'professional',
			description:
				'A block of text where you can provide a brief biography or description of the team member.',
			validation: (Rule) => Rule.max(500),
		}),
		defineField({
			name: 'currentlyWorking',
			title: 'Is Currently Working?',
			type: 'boolean',
			initialValue: false,
			description: 'Check if the team member is currently working.',
			group: 'professional',
		}),
		defineField({
			name: 'startDate',
			title: 'Start Date',
			type: 'date',
			description: 'The date when the team member started working.',
			group: 'professional',
		}),
		defineField({
			name: 'endDate',
			title: 'End Date',
			type: 'date',
			hidden: ({ document }) => Boolean(document?.currentlyWorking),
			description:
				'The date when the team member stopped working (if applicable).',
			group: 'professional',
		}),
		defineField({
			name: 'role',
			title: 'Role',
			type: 'string',
			description: 'The role or position of the team member.',
			group: 'professional',
		}),
		defineField({
			name: 'qualifications',
			title: 'Qualifications',
			type: 'string',
			description:
				'The qualifications or certifications of the team member.',
			group: 'professional',
		}),
		defineField({
			name: 'languages',
			title: 'Languages Spoken',
			type: 'array',
			of: [{ type: 'string' }],
			options: {
				list: [
					{ title: 'English', value: 'english' },
					{ title: 'Tamil', value: 'tamil' },
					{ title: 'Hindi', value: 'hindi' },
				],
			},
			description: 'Languages spoken by the team member.',
			group: 'professional',
		}),
		defineField({
			name: 'instagram',
			title: 'Instagram Profile',
			type: 'url',
			icon: Instagram,
			group: 'social',
			description: "The team member's Instagram profile URL.",
		}),
		defineField({
			name: 'twitter',
			title: 'Twitter Profile',
			type: 'url',
			icon: Twitter,
			group: 'social',
			description: "The team member's Twitter profile URL.",
		}),
		defineField({
			name: 'linkedin',
			title: 'LinkedIn Profile',
			type: 'url',
			icon: Linkedin,
			group: 'social',
			description: "The team member's LinkedIn profile URL.",
		}),
		defineField({
			name: 'website',
			title: 'Website',
			type: 'url',
			icon: Globe,
			group: 'social',
			description:
				"The team member's personal or professional website URL.",
		}),
		defineField({
			name: 'email',
			title: 'Email',
			type: 'string',
			icon: Mail,
			group: 'social',
			description: "The team member's contact email address.",
		}),
		defineField({
			name: 'youtube',
			title: 'YouTube',
			type: 'url',
			icon: Youtube,
			group: 'social',
			description: "The team member's YouTube channel URL.",
		}),
	],
	preview: {
		select: {
			title: 'name',
			media: 'image',
		},
	},
});
