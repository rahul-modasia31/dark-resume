import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Rahul Kumar Modasia Resume',
	description: 'Dark mode resume built with Next.js and Tailwind CSS'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
