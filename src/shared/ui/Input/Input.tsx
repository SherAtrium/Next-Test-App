'use client';

import { Text } from '@/shared/ui/Text/Text';
import styles from './Input.module.scss';
import type { InputProps } from './types';

export function Input({
	id,
	label,
	wrapperClassName,
	labelClassName,
	inputClassName,
	...rest
}: InputProps) {
	return (
		<div className={wrapperClassName ?? styles.wrapper}>
			{label && (
				<label htmlFor={id} className={labelClassName ?? styles.label}>
					<Text as='span'>{label}</Text>
				</label>
			)}
			<input id={id} className={inputClassName ?? styles.input} {...rest} />
		</div>
	);
}
