'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/shared/ui/Button/Button';
import styles from './ThemeToggle.module.scss';

export function ThemeToggle() {
	const { theme, setTheme, systemTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Avoid hydration mismatch
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	const current = resolvedTheme ?? theme ?? 'light';

	return (
		<div className={styles.wrapper}>
			<Button onClick={() => setTheme('light')}>Light</Button>
			<Button onClick={() => setTheme('dark')}>Dark</Button>
			<Button onClick={() => setTheme('system')}>System</Button>

			<span className={styles.label}>
				Theme: {current} {theme === 'system' ? `(system: ${systemTheme})` : ''}
			</span>
		</div>
	);
}
