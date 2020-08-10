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
                <Notification news="Website has been published!"/>
                <Header subtitle="Home Page"/>
                <Footer />
            </div>


        </>
    );
};
