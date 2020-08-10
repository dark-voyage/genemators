import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Notification from "../components/Notification";

export default function Home() {
    return (
        <>
            <Head>
                <title>Genemator's</title>
            </Head>
            <div className="bg-black">
                <Header subtitle="Home Page"/>
                <Notification news="Website has been published!"/>
                <Footer />
            </div>


        </>
    );
};
