import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import IntroComponent from '../components/IntroComponent'

import AboutComponent from '../components/AboutComponent';
import { useEffect } from 'react';

const Home: NextPage = () => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');

                    for (var i = 0; i < entry.target.children.length; i++) {
                        var child = entry.target.children[i];

                        if (child.classList.contains('delayed')) {
                            child.classList.remove(`delayed`);
                            child.style.transitionDelay = `${(i) * 250}ms`
                        }

                        child.classList.add('show');
                    }
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hid');
        hiddenElements.forEach((el) => observer.observe(el));
    })

    return (
        <div className="w-full h-full p-2 overflow-x-hidden select-none">
            <Head>
                <title>Portoflio</title>
                <meta name="description" content="Created with NextJs." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="main space-y-16">
                <IntroComponent></IntroComponent>
                <AboutComponent></AboutComponent>
            </main>
        </div>
    )
}

export default Home
