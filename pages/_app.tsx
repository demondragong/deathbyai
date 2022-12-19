// Global Stylesheet
import '../public/global.css';

import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';


declare global {
    interface Window {
        umami?: any;
    }
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return <>
        <script async defer data-website-id={process.env.UMAMI_ID} src="/umami.js" />
        <Component {...pageProps} />
        <Analytics />
    </>
}

export default MyApp;
