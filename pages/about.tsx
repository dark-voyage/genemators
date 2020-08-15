import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Notification from "../components/Notification";
// import Link from "next/link";

// @ts-ignore
import Typewriter from "typewriter-effect";


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
            className="h-auto sm:w-1/2 lg:1/2 xl:w-1/4"
            alt="Genemator's Logo"
          />
        </div>
        <div className="flex mb-4 justify-center mt-8">
          <div className="text-white text-center xl:text-6xl lg:text-5xl text-4xl border rounded hover:bg-white hover:text-black">
              愛のあるコード
          </div>
        </div>
        <div className="flex mb-16 justify-center">
          <div className="text-white text-center xl:text-3xl lg:text-2xl text-1xl border rounded">
              <Typewriter
                  options={{
                      deleteSpeed: 25,
                      strings: ['I am $enior Developer from Uzbekistan...', 'Welcome to my showcase!'],
                      autoStart: true,
                      loop: true,
                  }}
              />
          </div>
        </div>
          <div className="py-12">
              <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="lg:text-center">
                      <p className="text-base leading-6 text-white font-semibold tracking-wide uppercase">Transactions</p>
                      <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10">
                          A better way to send money
                      </h3>
                      <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-300 lg:mx-auto">
                          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate
                          veritatis in accusamus quisquam.
                      </p>
                  </div>

                  <div className="mt-10">
                      <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
                          <li>
                              <div className="flex">
                                  <div className="flex-shrink-0">
                                      <div
                                          className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-black">
                                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                               stroke="currentColor">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                                          </svg>
                                      </div>
                                  </div>
                                  <div className="ml-4">
                                      <h4 className="text-lg leading-6 font-medium text-white">Competitive exchange
                                          rates</h4>
                                      <p className="mt-2 text-base leading-6 text-gray-300">
                                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                                          perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                      </p>
                                  </div>
                              </div>
                          </li>
                          <li className="mt-10 md:mt-0">
                              <div className="flex">
                                  <div className="flex-shrink-0">
                                      <div
                                          className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-black">
                                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                               stroke="currentColor">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
                                          </svg>
                                      </div>
                                  </div>
                                  <div className="ml-4">
                                      <h4 className="text-lg leading-6 font-medium text-white">No hidden fees</h4>
                                      <p className="mt-2 text-base leading-6 text-gray-300">
                                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                                          perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                      </p>
                                  </div>
                              </div>
                          </li>
                          <li className="mt-10 md:mt-0">
                              <div className="flex">
                                  <div className="flex-shrink-0">
                                      <div
                                          className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-black">
                                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                               stroke="currentColor">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                          </svg>
                                      </div>
                                  </div>
                                  <div className="ml-4">
                                      <h4 className="text-lg leading-6 font-medium text-white">Transfers are
                                          instant</h4>
                                      <p className="mt-2 text-base leading-6 text-gray-300">
                                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                                          perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                      </p>
                                  </div>
                              </div>
                          </li>
                          <li className="mt-10 md:mt-0">
                              <div className="flex">
                                  <div className="flex-shrink-0">
                                      <div
                                          className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-black">
                                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                               stroke="currentColor">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
                                          </svg>
                                      </div>
                                  </div>
                                  <div className="ml-4">
                                      <h4 className="text-lg leading-6 font-medium text-white">Mobile
                                          notifications</h4>
                                      <p className="mt-2 text-base leading-6 text-gray-300">
                                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                                          perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                      </p>
                                  </div>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
      <Footer />
    </>
  );
}
