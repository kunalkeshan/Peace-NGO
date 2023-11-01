type Category = Readonly<{
	_id: string;
	title: string;
	slug: string;
	description?: string;
}>;

type Story = Readonly<{
	_id: string;
	name: string;
	image: string;
	alt?: string;
	story: string;
	role?: string;
	instagram?: string;
	twitter?: string;
	linkedin?: string;
	website?: string;
	email?: string;
	youtube?: string;
}>;

type Impact = Readonly<{
	_id: string;
	title: string;
	category: Category;
	number: number;
	description?: string;
}>;

type TeamMember = Readonly<{
	_id: string;
	name: string;
	slug: string;
	image: string;
	alt: string;
	qualifications?: string;
	bio?: string;
	currentlyWorking: boolean;
	startDate?: Date;
	endDate?: Date;
	role?: string;
	languages?: string[];
	instagram?: string;
	twitter?: string;
	linkedin?: string;
	website?: string;
	email?: string;
	youtube?: string;
}>;

type GalleryImage = Readonly<{
	_id: string;
	caption: string;
	image: string;
	alt: string;
}>;

type BlogPost = Readonly<{
	_id: string;
	title: string;
	description: string;
	slug: string;
	author: TeamMember;
	image?: string;
	alt?: string;
	categories?: Category[];
	publishedAt: Date;
	body?: TypedObject | TypedObject[];
}>;

type Program = Readonly<{
	_id: string;
	title: string;
	description: string;
	image: string;
	alt: string;
}>;
