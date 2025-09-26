import { fetchJson } from '@/shared/api/http';
import type { PostProps } from '../model/types';

type ListParams = { limit?: number; revalidate?: number };

export const postsApi = {
	// CSR: The client goes to our API route
	async getAllCSR({ limit }: ListParams = {}): Promise<PostProps[]> {
		const data = await fetchJson<PostProps[]>('/api/posts', { cache: 'no-store' });
		return typeof limit === 'number' ? data.slice(0, limit) : data;
	},

	// SSR: The server goes to our API route without a cache
	async getAllSSR({ limit }: ListParams = {}): Promise<PostProps[]> {
		// Will be used env variable instead of localhost
		const data = await fetchJson<PostProps[]>('http://localhost:3000/api/posts', {
			cache: 'no-store',
		});
		return typeof limit === 'number' ? data.slice(0, limit) : data;
	},

	// SSG: on build, we get data directly from an external API (available for management without a cache)
	async getAllSSG({ limit }: ListParams = {}): Promise<PostProps[]> {
		const data = await fetchJson<PostProps[]>('https://jsonplaceholder.typicode.com/posts');
		return typeof limit === 'number' ? data.slice(0, limit) : data;
	},

	// ISR: specify revalidate
	async getAllISR({ limit, revalidate = 60 }: ListParams = {}): Promise<PostProps[]> {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
			next: { revalidate },
		});
		if (!res.ok) return [];
		const data = (await res.json()) as PostProps[];
		return typeof limit === 'number' ? data.slice(0, limit) : data;
	},
};
