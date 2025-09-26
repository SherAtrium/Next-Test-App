export type HttpOptions = RequestInit & {
	query?: Record<string, string | number | boolean | undefined>;
};

function buildUrl(url: string, query?: HttpOptions['query']) {
	if (!query) return url;
	const u = new URL(
		url,
		typeof window === 'undefined' ? 'http://localhost' : window.location.origin,
	);
	Object.entries(query).forEach(([k, v]) => {
		if (v !== undefined) u.searchParams.set(k, String(v));
	});
	return u.toString().replace(/^https?:\/\/localhost/, '');
}

export async function fetchJson<T>(url: string, opts: HttpOptions = {}): Promise<T> {
	const { query, headers, ...rest } = opts;
	const res = await fetch(buildUrl(url, query), {
		headers: { 'content-type': 'application/json', ...(headers || {}) },
		...rest,
	});
	if (!res.ok) {
		const text = await res.text().catch(() => '');
		throw new Error(`HTTP ${res.status}: ${text || res.statusText}`);
	}
	return res.json() as Promise<T>;
}
