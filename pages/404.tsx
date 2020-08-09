import Head from "next/head";
import React from "react";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Oopsie, 404!</title>
            </Head>
            <div className="bg-white">
                <div className="bg-gray-50 border-b border-gray-200">
                    <div className="max-w-screen-sm mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-20 flex flex-col items-center">
                        <h1 className="font-extrabold text-5xl leading-10 tracking-tight text-gray-900">
                            ...404...
                        </h1>
                        <h2 className="mt-4 sm:mt-5 font-light text-2xl text-center leading-tight text-gray-900">
                            You have a very big trouble with that address!.
                        </h2>
                    </div>
                </div>
            </div>
        </>

    )
}
