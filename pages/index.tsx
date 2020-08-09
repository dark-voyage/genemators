import React from "react";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
               <title>Genemator's Portfolio</title>
            </Head>
            <div className="bg-white">
                <div className="bg-gray-50 border-b border-gray-200">
                    <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-20 flex flex-col items-center">
                        <h1 className="font-extrabold text-5xl leading-10 tracking-tight text-gray-900">
                            Welcome, Genemator
                        </h1>
                        <h2 className="mt-4 sm:mt-5 font-light text-2xl text-center leading-tight text-gray-900">
                            We <strong className="font-semibold">have</strong> been {" "}
                            <strong className="font-semibold">waiting</strong> for{" "}
                            <strong className="font-semibold">you!</strong>.
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
};
