import ModalUploadDemo from '@/features/modal-upload/ui/ModalUploadDemo';
import { ThemeToggle } from '@/shared/components/ThemeToggle/ThemeToggle';
import { WebSocketEcho } from '@/shared/components/WebSocketEcho/WebSocketEcho';
import styles from './page.module.scss';

export default function Home() {
	return (
		<section className={styles.mainSection}>
			<ThemeToggle />
			<WebSocketEcho payloadPrefix='TestingWebsocketEcho' />
			<ModalUploadDemo />
		</section>
	);
}
