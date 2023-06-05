import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LayoutComponent from '../components/LayoutComponent';

import dynamic from "next/dynamic";
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

    const [display, setDisplay] = useState(true);

    useEffect(() => {
        window.onscroll = function (ev) {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                setDisplay(false);
            } else {
                setDisplay(true);
            }
        };
    })

    return (
        <div className="bg-dark text-light">
            <div className="hidden md:block verticalText fixed text-center flex flex-col justify-center text-primary bottom-0 pt-2 pr-2 pb-2">
                <p>Handcrafted by me.</p>
                <p>{'/>'} Portfolio</p>
            </div>
            <Component {...pageProps} />
            {display && <div className="fixed right-0 bottom-0 text-white w-10 m-auto mr-5 mb-5 space-y-2">
                <div className="max-h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-mouse w-full h-full mouse hidden md:block" viewBox="0 0 16 16">
                        <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z" />
                    </svg>
                </div>
                <div className="grid place-content-center content-center arrows text-primary_accent">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-chevron-down w-[50%] m-auto arrow" viewBox="0 0 16 12">
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-chevron-down w-[50%] m-auto arrow" viewBox="0 0 16 12">
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-chevron-down w-[50%] m-auto arrow" viewBox="0 0 16 12">
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
            </div>}
        </div>
);
}
export default MyApp
