import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Notification from "../components/Notification";
import Hero from "../components/Hero";

export default function Home() {
    return (
        <>
            <Head>
                <title>Genemator's</title>
                <link rel="stylesheet" href="/css/hero.css"/>
                <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.0.0/gsap.min.js'/>
                <script src="/js/hero.js"/>
            </Head>
            <div className="">
                <Notification news="Website has been published to v1!"/>
                <Header subtitle="Home Page"/>
                <Hero/>
                <div className="bg-black content-center justify-center left-auto top-auto flex">
                    {/*<img className="py-16" src="/preview.png" alt="Genemator's Logo"/>*/}
                </div>

                <Footer/>
            </div>


        </>
    );
};
