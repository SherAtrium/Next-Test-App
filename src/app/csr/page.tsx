'use client';

import { useEffect, useState } from 'react';
import { postsApi } from '@/entities/post/api/postsApi';
import type { PostProps } from '@/entities/post/model/types';
import { ListRenderer } from '@/shared/components/ListRenderer/ListRenderer';
import { Text } from '@/shared/ui/Text/Text';
import styles from '../page.module.scss';

export default function CSRPage() {
	const [posts, setPosts] = useState<PostProps[] | null>(null);

	useEffect(() => {
		postsApi
			.getAllCSR({ limit: 5 })
			.then(setPosts)
			.catch(() => setPosts([]));
	}, []);

	return (
		<div className={styles.innerPageWrapper}>
			<Text as='h1' size='lg' weight='bold' className={styles.title}>
				CSR Page
			</Text>
			<Text tone='muted' className={styles.paragraph}>
				Data is loaded on the client via useEffect.
			</Text>

			{posts ? (
				<ListRenderer
					items={posts}
					renderItemAction={p => p.title}
					keyExtractorAction={p => p.id}
					className={styles.list}
				/>
			) : (
				<ul className={styles.list}>
					<li>Loading…</li>
				</ul>
			)}
		</div>
	);
}
