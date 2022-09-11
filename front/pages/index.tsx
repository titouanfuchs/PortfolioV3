﻿import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import IntroComponent from '../components/IntroComponent'
import styles from '../styles/Home.module.css'

import dynamic from "next/dynamic";

const Animator = dynamic(
    import("react-scroll-motion").then((it) => it.Animator),
    { ssr: false }
);


import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import AboutComponent from '../components/AboutComponent'
import LayoutComponent from '../components/LayoutComponent'

const FadeMove = batch(Fade(), Sticky(), MoveOut(0, -200));


const Home: NextPage = () => {
  return (
    <div className="w-full h-full p-2">
        <Head>
            <title>Portoflio</title>
            <meta name="description" content="Created with NextJs." />
            <link rel="icon" href="/favicon.ico" />
        </Head>

          <main className="main">
            <ScrollContainer>
                <ScrollPage>
                      <Animator animation={FadeMove}>
                        <IntroComponent></IntroComponent>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                      <Animator animation={FadeMove}>
                        <AboutComponent></AboutComponent>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>

        </main>
    </div>
  )
}

export default Home
