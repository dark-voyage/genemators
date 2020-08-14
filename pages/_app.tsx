import React from "react";
import App from "next/app";
import Head from "next/head";
import "../components/app.css";
import Router from "next/router";
import NProgress from "nprogress";
import "../components/ngprogress.css";

NProgress.configure({
  showSpinner: false,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const preview: string = `https://raw.githubusercontent.com/genemators/genemators/master/public/preview.png`;
    return (
      <div className="h-screen">
        <Head>
          <meta property="og:image" content={preview} />
          <meta property="og:site_name" content="Genemator's" />
          <title>Genemator's Portfolio Website</title>
        </Head>
        <Component {...pageProps} />
      </div>
    );
  }
}
