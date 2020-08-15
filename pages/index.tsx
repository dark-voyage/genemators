import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Notification from "../components/Notification";
import Link from "next/link";

export default function Home() {
  const random = () => {
    const links = ["/posts", "/about"];
    const index = Math.floor(Math.random() * links.length);
    return links[index];
  };

  return (
    <>
      <Head>
        <title>Genemator's</title>
        <meta property="og:title" content="Welcome to Genemator's Website" />
        <meta
          property="og:description"
          content="Hi, I'm Geno Ferollo a.k.a Genemator. My website serves as a sources of information about my studies & works. Glad that you're interested! ;)"
        />
      </Head>
      <Header subtitle="Home" />
      <Notification news="Website has been published to v1!" />
      <div className="h-auto">
      <div className="flex justify-center items-center mt-4 mb-8">
          <img
              src="/favicon.png"
              className="h-auto sm:w-1/2 lg:1/2 xl:w-1/4"
              alt="Genemator's Logo"
          />
      </div>
        <div className="flex mb-4 justify-center mt-8">
          <div className="text-white text-center xl:text-6xl lg:text-5xl text-4xl border rounded hover:bg-white hover:text-black">
            Genemator's Weebly
          </div>
        </div>
        <div className="flex mb-4 justify-center">
          <div className="text-white text-center xl:text-3xl lg:text-2xl text-1xl">
            Welcome to my website! ╰(*°▽°*)╯
          </div>
        </div>
        <Link href={random()} as="/wtf">
          <div className="flex mb-4 justify-center mb-32">
            <div className="text-white text-center xl:text-3xl lg:text-2xl text-1xl hover:underline cursor-pointer">
              {"->"} Hey, press me and I'll send you random page! ಠ_ಠ {"<-"}
            </div>
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
}
