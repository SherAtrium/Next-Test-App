import type React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonCommonProps = {
	variant?: ButtonVariant;
	size?: ButtonSize;
	block?: boolean;
	className?: string;
	children?: React.ReactNode;
};

export type ButtonButtonProps = ButtonCommonProps &
	React.ButtonHTMLAttributes<HTMLButtonElement> & {
		as?: 'button';
	};

export type ButtonAnchorProps = ButtonCommonProps &
	React.AnchorHTMLAttributes<HTMLAnchorElement> & {
		as: 'a';
	};

export type UIButtonProps = ButtonButtonProps | ButtonAnchorProps;
