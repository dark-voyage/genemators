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
            <div className="">
                <Notification news="Website has been published to v1!"/>
                <Header subtitle="Home Page"/>
                <div className="bg-black content-center justify-center left-auto top-auto flex">
                </div>
                <Footer/>
            </div>


        </>
    );
};
