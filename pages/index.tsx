import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Notification from "../components/Notification";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>Genemator's</title>
            </Head>
            <div className="">
                <Notification news="Website has been published to v1!"/>
                <Header subtitle="Home Page"/>
                <div className="h-auto">
                    <div className="flex mb-4 justify-center mt-64">
                        <div className="text-white text-center text-6xl border rounded hover:bg-white hover:text-black">
                            Genemator's Home Page
                        </div>
                    </div>
                    <div className="flex mb-4 justify-center">
                        <div className="text-white text-center text-3xl">
                            Welcome to my website! ╰(*°▽°*)╯
                        </div>
                    </div>
                    <Link href="/">
                        <div className="flex mb-4 justify-center mb-64">
                            <div className="text-white text-center text-3xl hover:underline cursor-pointer">
                                {"->"} Dunno where to send you ಠ_ಠ {"<-"}
                            </div>
                        </div>
                    </Link>
                <Footer/>
            </div>
            </div>
        </>
    );
};
