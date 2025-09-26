import { cls } from '@/shared/lib/cls';
import styles from './ListRenderer.module.scss';
import type { ServerListRendererProps } from './types';

export function ServerListRenderer<T>({
	items,
	renderItem,
	keyExtractor,
	as = 'ul',
	className,
	itemClassName,
	empty = null,
}: ServerListRendererProps<T>) {
	if (!items || items.length === 0) {
		return empty ?? null;
	}

	const ListComponent = as;

	return (
		<ListComponent className={cls(styles.list, className)}>
			{items.map((item, index) => {
				const key = keyExtractor ? keyExtractor(item, index) : index;
				return (
					<li className={cls(styles.item, itemClassName)} key={key}>
						{renderItem(item, index)}
					</li>
				);
			})}
		</ListComponent>
	);
}
