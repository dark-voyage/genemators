import React from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
    return(
        <>
            <Head>
                <title>Posts | Genemator's</title>
            </Head>
            <div className="">
                <Header subtitle="Posts"/>
                <div className="h-auto">

                </div>
                <Footer/>
            </div>
        </>
    )
}
