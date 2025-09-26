import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/Button/Button';
import { Text } from '@/shared/ui/Text/Text';
import styles from './Header.module.scss';

export default function Header() {
	return (
		<header>
			<Text as='h2' size='lg' weight='semibold' className={styles.title}>
				Navigation
			</Text>

			<nav className={styles.nav}>
				{ROUTES.map(r => (
					<Button key={r.href} as='a' href={r.href} variant='secondary' size='sm'>
						{r.label}
					</Button>
				))}
			</nav>
		</header>
	);
}
