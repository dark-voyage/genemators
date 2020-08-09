import React from "react";
import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
    return (
        <>
            <Head>
               <title>Genemator's Portfolio</title>
            </Head>
            <Header subtitle="Home Page"/>
        </>
    );
};
