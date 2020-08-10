import Head from "next/head";
import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Oopsie, 404! | Genemator's</title>
                <link rel="stylesheet" href="/css/404.css"/>
            </Head>
            <Header subtitle="404"/>
            <div className="h-auto">
                <div className="flex mb-4 justify-center mt-64">
                    <div className="text-white text-center text-6xl border rounded hover:bg-white hover:text-black">
                        404
                    </div>
                </div>
                <div className="flex mb-4 justify-center">
                    <div className="text-white text-center text-3xl">
                        Listen to my voice, the Geny's tellin' you the Devil's work
                    </div>
                </div>
                <Link href="/">
                    <div className="flex mb-4 justify-center mb-64">
                        <div className="text-white text-center text-3xl hover:underline cursor-pointer">
                            {"<-"} Go to hell
                        </div>
                    </div>
                </Link>

            </div>
            <Footer />
        </>

    )
}
