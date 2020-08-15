import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Notification from "../components/Notification";
// import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Genemator's</title>
        <meta property="og:title" content="Information about Genemator" />
        <meta
          property="og:description"
          content="In this page you can get detailed information about Genemator and his works & experiences."
        />
      </Head>
      <Header subtitle="About" />
      {/*<Notification news="Website has been published to v1!" />*/}
      <div className="h-auto">
        <div className="flex justify-center items-center mb-8">
          <img
            src="/big_logo.png"
            className="logo-head h-auto sm:w-1/2 lg:1/2 xl:w-1/4"
            alt="Genemator's Logo"
          />
        </div>
        <div className="flex mb-4 justify-center mt-8">
          <div className="text-white text-center xl:text-6xl lg:text-5xl text-4xl border rounded hover:bg-white hover:text-black">
            Hi, I'm Genemator
          </div>
        </div>
        <div className="flex mb-32 justify-center">
          <div className="text-white text-center xl:text-3xl lg:text-2xl text-1xl">
            Senior Full Stack Developer from Uzbekistan...
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
