'use client';

import { type PropsWithChildren, useEffect } from 'react';
import styles from './Modal.module.scss';
import type { ModalProps } from './types';

export default function Modal({ open, onClose, title, children }: PropsWithChildren<ModalProps>) {
	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [open, onClose]);

	useEffect(() => {
		if (!open) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = prev;
		};
	}, [open]);

	if (!open) return null;

	return (
		<div
			className={styles.wrapper}
			role='dialog'
			aria-modal='true'
			aria-label={title ?? 'Modal dialog'}
		>
			<div className={styles.backdrop} onClick={onClose} aria-hidden='true' />
			<div className={styles.center}>
				<div className={styles.modal} onClick={e => e.stopPropagation()}>
					<div className={styles.header}>
						<h3 className={styles.headerTitle}>{title ?? 'Modal'}</h3>
						<button
							type='button'
							onClick={onClose}
							className={styles.closeButton}
							aria-label='Close modal'
						>
							✕
						</button>
					</div>
					<div className={styles.content}>{children}</div>
				</div>
			</div>
		</div>
	);
}
