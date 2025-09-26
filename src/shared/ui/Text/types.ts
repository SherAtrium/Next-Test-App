import type React from 'react';
import type { JSX } from 'react';

export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold';
export type TextTone = 'default' | 'muted';

export type TextProps = {
	as?: keyof JSX.IntrinsicElements;
	size?: TextSize;
	weight?: TextWeight;
	tone?: TextTone;
	className?: string;
	children?: React.ReactNode;
};
