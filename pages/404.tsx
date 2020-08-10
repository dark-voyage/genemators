import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Oopsie, 404! | Genemator's</title>
            </Head>
            <div className="bg-black">
                <Header subtitle="404"/>
                <Footer />
            </div>
        </>

    )
}
