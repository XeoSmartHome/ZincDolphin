type Device = {
	id: string;
	name: string;
	shortDescription: string;
	longDescription: string;
	images: {
		main: string;
		secondaries?: string[];
	},
	tags?: string[];
}
