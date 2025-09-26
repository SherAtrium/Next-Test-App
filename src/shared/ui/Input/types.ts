export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'children'> & {
	label?: string;
	wrapperClassName?: string;
	labelClassName?: string;
	inputClassName?: string;
};
