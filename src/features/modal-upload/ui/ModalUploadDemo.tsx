'use client';

import { useId, useRef, useState } from 'react';
import { FileUpload } from '@/shared/components/FileUpload/FileUpload';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import Modal from '@/shared/ui/Modal/Modal';
import { Text } from '@/shared/ui/Text/Text';
import type { ModalStatus, ModalUploadForm } from '../model/types';
import styles from './ModalUploadDemo.module.scss';

export default function ModalUploadDemo() {
	const [open, setOpen] = useState(false);
	const [form, setForm] = useState<ModalUploadForm>({ title: '', file: null });
	const [status, setStatus] = useState<ModalStatus>({ loading: false, error: null, result: null });

	const titleId = useId();
	const fileId = useId();
	const formRef = useRef<HTMLFormElement>(null);

	function resetForm() {
		setForm({ title: '', file: null });
		formRef.current?.reset();
		setStatus({ loading: false, error: null, result: null });
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setStatus(s => ({ ...s, loading: true, error: null, result: null }));

		try {
			const payload = {
				title: form.title,
				attachment: form.file
					? { name: form.file.name, size: form.file.size, type: form.file.type }
					: null,
			};

			const res = await fetch('/api/posts', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify(payload),
			});

			if (!res.ok) {
				const text = await res.text().catch(() => '');
				throw new Error(text || `Request failed with ${res.status}`);
			}

			const data = (await res.json().catch(() => null)) ?? {};
			setStatus({ loading: false, error: null, result: data });
		} catch (err) {
			setStatus({
				loading: false,
				error: err instanceof Error ? err.message : 'Unknown error',
				result: null,
			});
		}
	}

	return (
		<div className={styles.container}>
			<Text as='h2' size='lg' weight='semibold' className={styles.heading}>
				Modal demo
			</Text>
			<Text as='p' tone='muted' className={styles.subtext}>
				Click the button to open a modal window with Text and File fields.
			</Text>
			<Button
				as='button'
				variant='primary'
				onClick={() => setOpen(true)}
				className={styles.openButton}
			>
				Open Modal
			</Button>

			<Modal open={open} onClose={() => setOpen(false)} title='Upload form'>
				<form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
					<Input
						id={titleId}
						type='text'
						label='Title (text)'
						value={form.title}
						onChange={e => setForm(s => ({ ...s, title: e.target.value }))}
						placeholder='Enter title'
						required
						disabled={status.loading}
					/>

					<FileUpload
						id={fileId}
						label='Attachment (file)'
						required
						disabled={status.loading}
						onChangeAction={f => setForm(s => ({ ...s, file: f }))}
						onErrorAction={msg => setStatus(s => ({ ...s, error: msg }))}
					/>

					<div className={styles.actions}>
						<Button as='button' type='submit' variant='primary' disabled={status.loading}>
							{status.loading ? 'Saving...' : 'Save'}
						</Button>
						<Button
							as='button'
							type='button'
							variant='secondary'
							onClick={resetForm}
							disabled={status.loading}
						>
							Reset
						</Button>
						<div className={styles.spacer} />
						<Button
							as='button'
							type='button'
							variant='ghost'
							onClick={() => setOpen(false)}
							disabled={status.loading}
						>
							Close
						</Button>
					</div>

					{status.error && (
						<Text as='p' className={styles.subtext}>
							Error: {status.error}
						</Text>
					)}
					{status.result && (
						<pre className={styles.subtext} aria-live='polite' style={{ whiteSpace: 'pre-wrap' }}>
							{JSON.stringify(status.result, null, 2)}
						</pre>
					)}
				</form>
			</Modal>
		</div>
	);
}
