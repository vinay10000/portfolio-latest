import type {Metadata, Viewport} from 'next';
import './globals.scss';
import Navbar from '@/components/Navigations/NavBar';
import Footer from '@/components/Navigations/Footer';

export const metadata: Metadata = {
    title: 'Vinay - Full Stack Developer & Tech Enthusiast',
    description: 'Versatile TypeScript FullStack Developer with a flair for designing and developing scalable web applications using Next.js, Nest.js, and a suite of modern technologies. Passionate about building user-centric solutions and leveraging AI technologies like OpenAI GPT for personalized experiences.',
    keywords: 'TypeScript, Full Stack Developer, React.js, Node.js, Next.js, Nest.js, Web Development, AI, OpenAI GPT, Software Engineering',
    authors: [{name: 'Vinay'}],
    manifest: '/manifest.json',
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'Vinay'
    },
    formatDetection: {
        telephone: false
    },
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        
    }
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
    themeColor: ' #191919',
    colorScheme: 'dark'
};


export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
