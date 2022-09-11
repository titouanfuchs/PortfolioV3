import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LayoutComponent from '../components/LayoutComponent';

import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="bg-dark text-light">
            <div className="verticalText fixed text-center flex flex-col justify-center text-primary bottom-0 pt-2 pr-2 pb-2">
                <p>Handcrafted by me.</p>
                <p>{'/>'} Portfolio</p>
            </div>
            <Component {...pageProps} />
        </div>
);
}
export default MyApp
