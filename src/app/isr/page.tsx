import { postsApi } from '@/entities/post/api/postsApi';
import type { PostProps } from '@/entities/post/model/types';
import { ServerListRenderer } from '@/shared/components/ListRenderer/ServerListRenderer';
import { Text } from '@/shared/ui/Text/Text';
import styles from '../page.module.scss';

const revalidate = 60;

export default async function ISRPage() {
	const posts: PostProps[] = await postsApi.getAllISR({ limit: 5, revalidate });

	return (
		<div className={styles.innerPageWrapper}>
			<Text as='h1' size='lg' weight='bold' className={styles.title}>
				ISR Page
			</Text>
			<Text tone='muted' className={styles.paragraph}>
				Static page refreshed every {revalidate} seconds.
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
