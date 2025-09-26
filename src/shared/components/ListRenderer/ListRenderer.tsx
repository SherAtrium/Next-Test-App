'use client';

import { cls } from '@/shared/lib/cls';
import styles from './ListRenderer.module.scss';
import type { ListRendererProps } from './types';

export function ListRenderer<T>({
	items,
	renderItemAction,
	keyExtractorAction,
	as = 'ul',
	className,
	itemClassName,
	empty = null,
}: ListRendererProps<T>) {
	if (!items || items.length === 0) {
		return empty ?? null;
	}

	const ListComponent = as;

	return (
		<ListComponent className={cls(styles.list, className)}>
			{items.map((item, index) => {
				const key = keyExtractorAction ? keyExtractorAction(item, index) : index;
				return (
					<li className={cls(styles.item, itemClassName)} key={key}>
						{renderItemAction(item, index)}
					</li>
				);
			})}
		</ListComponent>
	);
}
