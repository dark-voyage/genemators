import React from "react";
import App from "next/app";
import Head from "next/head";

export default class DenoWebsiteApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <div className="h-screen">
                <Head><title/></Head>
                <Component {...pageProps} />
            </div>
        );
    }
}
