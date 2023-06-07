import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import NavButton from "../components/Navigation/NavButton";

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
            <div className="hidden md:flex verticalText fixed text-center flex-col justify-center bottom-0 pt-2 pr-2 pb-2">
                <p>Handcrafted by me.</p>
                <p className="text-primary">{'/>'} Portfolio</p>
            </div>

            <div className="flex max-h-screen">
                <div className="hidden md:flex min-w-[4rem] w-[4rem] space-y-5 flex-col border-r border-gray-700 justify-center">
                    <NavButton key="1" sectionToScroll="Intro">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full bi bi-house" fill="currentColor" viewBox="0 0 16 16">
                            <path
                                d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                        </svg>
                    </NavButton>
                    <NavButton key="2" sectionToScroll="About">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                             className="bi bi-file-person w-full h-full" viewBox="0 0 16 16">
                            <path
                                d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                    </NavButton>
                    <NavButton key="2" sectionToScroll="Experience">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                             className="bi bi-lightning-charge w-full h-full" viewBox="0 0 16 16">
                            <path
                                d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
                        </svg>
                    </NavButton>
                    <NavButton key="2" sectionToScroll="Projects">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                             className="bi bi-file-zip w-full h-full" viewBox="0 0 16 16">
                            <path
                                d="M6.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599V7.5zm2 0h-1v.938a1 1 0 0 1-.03.243l-.4 1.598.93.62.93-.62-.4-1.598a1 1 0 0 1-.03-.243V7.5z"/>
                            <path
                                d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm5.5-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9v1H8v1h1v1H8v1h1v1H7.5V5h-1V4h1V3h-1V2h1V1z"/>
                        </svg>
                    </NavButton>
                </div>

                <div className="flex-grow">
                    <Component {...pageProps} />
                </div>
            </div>

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
