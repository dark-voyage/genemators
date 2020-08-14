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
          content="In our website, I'm Geno Ferollo a.k.a Genemator. My website serves as a sources of information about my studies & works. Glad that you're interested! ;)"
        />
      </Head>
      <Header subtitle="Home" />
      <Notification news="Website has been published to v1!" />
      <div className="h-auto">
        <div className="flex mb-4 justify-center mt-64">
          <div className="text-white text-center xl:text-6xl lg:text-5xl text-4xl border rounded hover:bg-white hover:text-black">
            Gendy's Weebly
          </div>
        </div>
        <div className="flex mb-4 justify-center">
          <div className="text-white text-center xl:text-3xl lg:text-2xl text-1xl">
            Welcome to my website! ╰(*°▽°*)╯
          </div>
        </div>
        <Link href={random()} as="/wtf">
          <div className="flex mb-4 justify-center mb-64">
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
