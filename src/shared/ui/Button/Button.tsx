'use client';

import type React from 'react';
import { cls } from '@/shared/lib/cls';
import styles from './Button.module.scss';
import type { ButtonAnchorProps, ButtonButtonProps, UIButtonProps } from './types';

export function Button(props: UIButtonProps) {
	const {
		as = 'button',
		variant = 'primary',
		size = 'md',
		block = false,
		className,
		children,
		...rest
	} = props as UIButtonProps;

	if (as === 'a') {
		const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
		const classes = cls(
			styles.button,
			styles[variant],
			styles[size],
			{ [styles.block]: block },
			className,
		);
		return (
			<a {...(anchorProps as ButtonAnchorProps)} className={classes}>
				{children}
			</a>
		);
	}

	const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
	const classes = cls(
		styles.button,
		styles[variant],
		styles[size],
		{ [styles.block]: block },
		{ [styles.disabled]: Boolean(buttonProps.disabled) },
		className,
	);

	return (
		<button {...(buttonProps as ButtonButtonProps)} className={classes}>
			{children}
		</button>
	);
}
