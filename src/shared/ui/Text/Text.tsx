'use client';

import { cls } from '@/shared/lib/cls';
import styles from './Text.module.scss';
import type { TextProps } from './types';

export function Text(props: TextProps) {
	const {
		as,
		size = 'md',
		weight = 'regular',
		tone = 'default',
		className,
		children,
		...rest
	} = props;

	const Component = as ?? 'p';

	const classes = cls(
		styles.base,
		styles[size],
		styles[weight],
		{ [styles.muted]: tone === 'muted' },
		className,
	);

	return (
		<Component className={classes} {...rest}>
			{children}
		</Component>
	);
}
