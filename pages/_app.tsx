// Global Stylesheet
import '../public/global.css';

import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return <>
        <script defer data-domain="deathbyai.com" src="https://plausible.io/js/script.js"></script>
        <Component {...pageProps} />
        <Analytics />
    </>
}

export default MyApp;
