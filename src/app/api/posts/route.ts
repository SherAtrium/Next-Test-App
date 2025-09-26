import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
		cache: 'no-store',
	});
	const data = await res.json();
	return new Response(JSON.stringify(data), {
		status: 200,
		headers: { 'content-type': 'application/json' },
	});
}

export async function POST(req: NextRequest) {
	const body = await req.json();
	const upstream = await fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: { 'content-type': 'application/json; charset=UTF-8' },
		body: JSON.stringify(body),
		cache: 'no-store',
	});

	const data = await upstream.json();
	return new Response(JSON.stringify(data), {
		status: 201,
		headers: { 'content-type': 'application/json' },
	});
}
