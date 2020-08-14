import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Notification from "../components/Notification";

export default function About() {
    return(
        <>
            <Head>
                <title>About | Genemator's</title>
            </Head>
            <Header subtitle="About"/>
            <Notification news="Website has been published to v1!"/>
            <div className="h-auto">

            </div>
            <Footer/>
        </>
    )
}
