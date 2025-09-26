export const dynamic = 'force-static';

import { postsApi } from '@/entities/post/api/postsApi';
import type { PostProps } from '@/entities/post/model/types';
import { ServerListRenderer } from '@/shared/components/ListRenderer/ServerListRenderer';
import { Text } from '@/shared/ui/Text/Text';
import styles from '../page.module.scss';

export default async function SSGPage() {
	const posts: PostProps[] = await postsApi.getAllSSG({ limit: 5 });

	return (
		<div className={styles.innerPageWrapper}>
			<Text as='h1' size='lg' weight='bold' className={styles.title}>
				SSG Page
			</Text>
			<Text tone='muted' className={styles.paragraph}>
				The page is compiled statically at the build stage.
			</Text>
			<ServerListRenderer
				items={posts}
				renderItem={p => p.title}
				keyExtractor={p => p.id}
				className={styles.list}
			/>
		</div>
	);
}
