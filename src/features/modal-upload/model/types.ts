export type ModalUploadForm = {
	title: string;
	file: File | null;
};

export type ModalStatus = {
	loading: boolean;
	error: string | null;
	result: string | null;
};
