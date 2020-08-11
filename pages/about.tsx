import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
    return(
        <>
            <Head>
                <title>About | Genemator's</title>
            </Head>
            <div className="">
                <Header subtitle="About"/>
                <div className="h-auto">

                </div>
                <Footer/>
            </div>
        </>
    )
}
