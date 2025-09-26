export const dynamic = 'force-dynamic';

import { postsApi } from '@/entities/post/api/postsApi';
import type { PostProps } from '@/entities/post/model/types';
import { ServerListRenderer } from '@/shared/components/ListRenderer/ServerListRenderer';
import { Text } from '@/shared/ui/Text/Text';
import styles from '../page.module.scss';

export default async function SSRPage() {
	const posts: PostProps[] = await postsApi.getAllSSR({ limit: 5 });

	return (
		<div className={styles.innerPageWrapper}>
			<Text as='h1' size='lg' weight='bold' className={styles.title}>
				SSR Page
			</Text>
			<Text tone='muted' className={styles.paragraph}>
				Data is received on the server for each request (force-dynamic).
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
