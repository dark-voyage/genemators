import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Genemator's Portfolio</title>
            </Head>
            <div className="bg-black">
                <Header subtitle="Home Page"/>
                <Footer />
            </div>


        </>
    );
};
