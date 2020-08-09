import React from "react";
import App from "next/app";
import Head from "next/head";
import "../components/app.css";

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        const preview: string = `https://raw.githubusercontent.com/genemators/genemators/master/public/preview.png`
        return (
            <div className="h-screen">
                <Head>
                    <meta property="og:title" content="Genemator's Portfolio Website!"/>
                    <meta property="og:image" content={preview}/>
                    <meta property="og:site_name" content="Genemator's Portfolio"/>
                    <meta property="og:description" content="Website created by Genemator Sakhib to present him and his works"/>
                    <title>Genemator's Portfolio</title>
                </Head>
                <Component {...pageProps} />
            </div>
        );
    }
}
