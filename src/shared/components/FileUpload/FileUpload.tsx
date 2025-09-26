'use client';

import { useMemo, useRef, useState } from 'react';
import { ACCEPTED_TYPES, MAX_FILE_SIZE } from '@/shared/constants/upload';
import { validateUpload } from '@/shared/lib/files';
import { formatBytes } from '@/shared/lib/format';
import { Text } from '@/shared/ui/Text/Text';
import styles from './FileUpload.module.scss';
import type { FileUploadProps } from './types';

export function FileUpload({
	id,
	label = 'Attachment',
	accept = ACCEPTED_TYPES,
	required,
	disabled,
	defaultFile = null,
	onChangeAction,
	onErrorAction,
	wrapperClassName,
	labelClassName,
	inputClassName,
	infoClassName,
}: FileUploadProps) {
	const inputRef = useRef<HTMLInputElement>(null);
	const [file, setFile] = useState<File | null>(defaultFile);

	const acceptAttr = useMemo(() => {
		return Array.isArray(accept) ? accept.join(',') : accept;
	}, [accept]);

	function handleError(msg: string) {
		if (onErrorAction) onErrorAction(msg);
		else alert(msg);
	}

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const f = e.target.files?.[0] ?? null;
		if (f) {
			const err = validateUpload(f, {
				accepted: Array.isArray(accept) ? accept : accept.split(',').map(s => s.trim()),
				maxSize: MAX_FILE_SIZE,
			});
			if (err) {
				handleError(err);
				if (inputRef.current) inputRef.current.value = '';
				setFile(null);
				onChangeAction?.(null);
				return;
			}
		}
		setFile(f);
		onChangeAction?.(f);
	}

	return (
		<div className={wrapperClassName ?? styles.wrapper}>
			{label && (
				<label htmlFor={id} className={labelClassName ?? styles.label}>
					<Text as='span'>{label}</Text>
				</label>
			)}
			<input
				id={id}
				ref={inputRef}
				type='file'
				accept={acceptAttr}
				required={required}
				disabled={disabled}
				className={inputClassName ?? styles.input}
				onChange={handleChange}
			/>
			{file && (
				<Text as='p' tone='muted' className={infoClassName ?? styles.info}>
					Selected: {file.name} ({formatBytes(file.size)})
				</Text>
			)}
		</div>
	);
}
