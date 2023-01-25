export type Post = {
	id: number;
	by: string;
	title: string;
	score: number;
	url?: string;
	kids?: number[];
	time: number;
};

export type Comment = {
	id: number;
	by: string;
	text: string;
	kids?: number[];
	parent: number;
	time: number;
};
