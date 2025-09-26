import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../shared/styles/globals.scss';
import { ThemeProvider } from 'next-themes';
import Footer from '@/shared/components/Footer/Footer';
import Header from '@/shared/components/Header/Header';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Next Test App',
	description: 'Created for testing purposes only',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${geistSans.className} ${geistMono.variable}`}>
				<ThemeProvider defaultTheme='system' enableSystem storageKey='theme'>
					<Header />
					<main>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
