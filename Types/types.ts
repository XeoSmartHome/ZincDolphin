type Device = {
	name: string;
	shortDescription: string;
	longDescription: string;
	images: {
		main: string;
		secondaries?: string[];
	}
}
