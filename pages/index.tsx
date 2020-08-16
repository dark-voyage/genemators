/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Notification from "../components/Notification";
import Link from "next/link";

export default function Home() {
  const random = () => {
    const links = ["/posts", "/about"];
    const index = Math.floor(Math.random() * links.length);
    return links[index];
  };

  return (
    <>
      <Head>
        <title>Genemator's</title>
        <meta property="og:title" content="Welcome to Genemator's Website" />
        <meta
          property="og:description"
          content="Hi, I'm Geno Ferollo a.k.a Genemator. My website serves as a sources of information about my studies & works. Glad that you're interested! ;)"
        />
      </Head>
      <Header subtitle="Home" />
      <Notification news="Website has been published to v1!" />
      <div className="h-auto">
        <div className="flex justify-center items-center">
          <svg
            className="text-white xl:w-3/4 lg:w-3/4 sm:w-3/4 w-3/4"
            version="1.1"
            width="450"
            height="450"
            viewBox="0 0 320 320"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
          >
            <defs>
              <path id="r1">
                <animate
                  id="p1"
                  attributeName="d"
                  values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0"
                  dur="6s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-width"
                  values="0;4;4;4;0"
                  dur="6s"
                  repeatCount="indefinite"
                  begin="p1.begin"
                />
              </path>
              <path id="r2">
                <animate
                  attributeName="d"
                  values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0"
                  dur="6s"
                  repeatCount="indefinite"
                  begin="p1.begin+1s"
                />
                <animate
                  attributeName="stroke-width"
                  values="0;4;4;4;0"
                  dur="6s"
                  repeatCount="indefinite"
                  begin="p1.begin+1s"
                />
              </path>
              <path id="r3">
                <animate
                  attributeName="d"
                  values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0"
                  dur="6s"
                  repeatCount="indefinite"
                  begin="p1.begin+2s"
                />
                <animate
                  attributeName="stroke-width"
                  values="0;4;4;4;0"
                  dur="6s"
                  repeatCount="indefinite"
                  begin="p1.begin+2s"
                />
              </path>
              <path id="r4">
                <animate
                  id="p1"
                  attributeName="d"
                  values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0"
                  dur="6s"
                  repeatCount="indefinite"
                  begin="p1.begin+3s"
                />
                <animate
                  attributeName="stroke-width"
                  values="0;4;4;4;0"
                  dur="6s"
                  repeatCount="indefinite"
                  begin="p1.begin+3s"
                />
              </path>
              <path id="r5">
                <animate
                  attributeName="d"
                  values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0"
                  dur="6s"
                  repeatCount="indefinite"
                  begin="p1.begin+4s"
                />
                <animate
                  attributeName="stroke-width"
                  values="0;4;4;4;0"
                  dur="6s"
                  repeatCount="indefinite"
                  begin="p1.begin+4s"
                />
              </path>
              <path id="r6">
                <animate
                  attributeName="d"
                  values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0"
                  dur="6s"
                  repeatCount="indefinite"
                  begin="p1.begin+5s"
                />
                <animate
                  attributeName="stroke-width"
                  values="0;4;4;4;0"
                  dur="6s"
                  repeatCount="indefinite"
                  begin="p1.begin+5s"
                />
              </path>
            </defs>
            <use xlinkHref="#r1" />
            <use xlinkHref="#r1" transform="rotate(60 160 160)" />
            <use xlinkHref="#r1" transform="rotate(120 160 160)" />
            <use xlinkHref="#r1" transform="rotate(180 160 160)" />
            <use xlinkHref="#r1" transform="rotate(240 160 160)" />
            <use xlinkHref="#r1" transform="rotate(300 160 160)" />
            <use xlinkHref="#r2" transform="rotate(30 160 160)" />
            <use xlinkHref="#r2" transform="rotate(90 160 160)" />
            <use xlinkHref="#r2" transform="rotate(150 160 160)" />
            <use xlinkHref="#r2" transform="rotate(210 160 160)" />
            <use xlinkHref="#r2" transform="rotate(270 160 160)" />
            <use xlinkHref="#r2" transform="rotate(330 160 160)" />
            <use xlinkHref="#r3" />
            <use xlinkHref="#r3" transform="rotate(60 160 160)" />
            <use xlinkHref="#r3" transform="rotate(120 160 160)" />
            <use xlinkHref="#r3" transform="rotate(180 160 160)" />
            <use xlinkHref="#r3" transform="rotate(240 160 160)" />
            <use xlinkHref="#r3" transform="rotate(300 160 160)" />
            <use xlinkHref="#r4" transform="rotate(30 160 160)" />
            <use xlinkHref="#r4" transform="rotate(90 160 160)" />
            <use xlinkHref="#r4" transform="rotate(150 160 160)" />
            <use xlinkHref="#r4" transform="rotate(210 160 160)" />
            <use xlinkHref="#r4" transform="rotate(270 160 160)" />
            <use xlinkHref="#r4" transform="rotate(330 160 160)" />
            <use xlinkHref="#r5" />
            <use xlinkHref="#r5" transform="rotate(60 160 160)" />
            <use xlinkHref="#r5" transform="rotate(120 160 160)" />
            <use xlinkHref="#r5" transform="rotate(180 160 160)" />
            <use xlinkHref="#r5" transform="rotate(240 160 160)" />
            <use xlinkHref="#r5" transform="rotate(300 160 160)" />
            <use xlinkHref="#r6" transform="rotate(30 160 160)" />
            <use xlinkHref="#r6" transform="rotate(90 160 160)" />
            <use xlinkHref="#r6" transform="rotate(150 160 160)" />
            <use xlinkHref="#r6" transform="rotate(210 160 160)" />
            <use xlinkHref="#r6" transform="rotate(270 160 160)" />
            <use xlinkHref="#r6" transform="rotate(330 160 160)" />
          </svg>
        </div>
        <div className="flex mb-4 justify-center">
          <div className="text-white text-center xl:text-6xl lg:text-5xl text-4xl border rounded hover:bg-white hover:text-black">
            Genemator's Weebly
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-white text-center xl:text-3xl lg:text-2xl text-1xl">
            Welcome to my website! ╰(*°▽°*)╯
          </div>
        </div>
        <Link href={random()} as="/wtf">
          <div className="flex mb-4 justify-center mb-32">
            <div className="text-white text-center xl:text-3xl lg:text-2xl text-1xl hover:underline cursor-pointer">
              {"->"} Hey, press me and I'll send you random page! ಠ_ಠ {"<-"}
            </div>
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
}
