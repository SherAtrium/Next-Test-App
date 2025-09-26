'use client';

import { useState } from 'react';
import { Button } from '@/shared/ui/Button/Button';
import { Text } from '@/shared/ui/Text/Text';
import type { WebSocketEchoProps } from './types';

export function WebSocketEcho({
	payloadPrefix,
	buttonLabel = 'Send WebSocket echo (optional)',
	disabled,
	className,
}: WebSocketEchoProps) {
	const [message, setMessage] = useState<string | null>(null);

	async function handleClick() {
		setMessage(null);
		try {
			const url = 'wss://echo.websocket.org';
			const ws = new WebSocket(url);
			const payload = `echo: ${payloadPrefix ?? 'no-title'}-${Date.now()}`;

			const timeout = setTimeout(() => {
				setMessage('WebSocket timeout');
				try {
					ws.close();
				} catch {}
			}, 8000);

			ws.onopen = () => {
				ws.send(payload);
			};
			ws.onmessage = evt => {
				if (typeof evt.data === 'string') {
					setMessage(`WebSocket echo -> ${evt.data}`);
				} else {
					setMessage('WebSocket echo -> [binary]');
				}
				clearTimeout(timeout);
				try {
					ws.close();
				} catch {}
			};
			ws.onerror = () => {
				setMessage('WebSocket error');
				clearTimeout(timeout);
				try {
					ws.close();
				} catch {}
			};
			ws.onclose = () => {
				clearTimeout(timeout);
			};
		} catch {
			setMessage('WebSocket init failed');
		}
	}

	return (
		<div className={className}>
			<Button
				as='button'
				type='button'
				variant='secondary'
				onClick={handleClick}
				disabled={disabled}
			>
				{buttonLabel}
			</Button>
			{message && (
				<Text as='p' tone='muted'>
					{message}
				</Text>
			)}
		</div>
	);
}
