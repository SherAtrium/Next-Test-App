import type { JSX, Key, ReactNode } from 'react';

export type ListRendererProps<T> = {
	items: T[];
	renderItemAction: (item: T, index: number) => ReactNode;
	keyExtractorAction?: (item: T, index: number) => Key;
	as?: keyof JSX.IntrinsicElements;
	className?: string;
	itemClassName?: string;
	empty?: ReactNode;
};

export type ServerListRendererProps<T> = {
	items: T[];
	renderItem: (item: T, index: number) => ReactNode;
	keyExtractor?: (item: T, index: number) => Key;
	as?: keyof JSX.IntrinsicElements;
	className?: string;
	itemClassName?: string;
	empty?: ReactNode;
};
