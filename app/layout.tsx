import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import MobileNavbar from '@/components/MobileNavbar';
import { ThemeProvider } from '@/providers/ThemeProvider';
import Script from 'next/script';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Dashboard',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			{/* <Script
			id='matomo'
			strategy='afterInteractive'
			dangerouslySetInnerHTML={{
				__html: `
					var _paq = window._paq = window._paq || [];
					_paq.push(['trackPageView']);
					_paq.push(['enableLinkTracking']);
					(function() {
						var u="//matomo.jackbowden.co.uk/";
						_paq.push(['setTrackerUrl', u+'matomo.php']);
						_paq.push(['setSiteId', '3']);
						var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
						g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
					})();
				`,
			}}
		/> */}
			<html
				lang='en'
				className='h-full'
			>
				<body className={`${inter.className} h-full`}>
					<main className='flex flex-col md:flex-row h-full overflow-hidden'>
						<Sidebar />

						<div className='flex-1 flex flex-col min-h-screen w-full px-4 md:p-4'>
							<div className='md:hidden sticky top-0 z-50'>
								<MobileNavbar />
							</div>
							<div className='flex-grow flex'>
								<div className='w-full max-w-6xl mx-auto'>
									<ThemeProvider
										attribute='class'
										defaultTheme='light'
									>
										{children}
									</ThemeProvider>
								</div>
							</div>
						</div>
					</main>
				</body>
			</html>
		</ClerkProvider>
	);
}
