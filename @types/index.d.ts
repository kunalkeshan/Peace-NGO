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
