export type FileUploadProps = {
	id?: string;
	label?: string;
	accept?: string | string[];
	required?: boolean;
	disabled?: boolean;
	defaultFile?: File | null;
	onChangeAction?: (file: File | null) => void;
	onErrorAction?: (message: string) => void;
	wrapperClassName?: string;
	labelClassName?: string;
	inputClassName?: string;
	infoClassName?: string;
};
