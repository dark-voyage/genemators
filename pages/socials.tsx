/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import { promises } from "fs";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { join } from "path";

interface SocialMeta {
    id: string
    url: string
    icon: string
    hover: string
}

interface Props {
    socials: SocialMeta[];
}

const Socials = (props: Props) => {
    return (
        <>
            <Head>
                <title>Socials | Genemator's</title>
                <meta property="og:title" content="Page where you can list posts" />
                <meta
                    property="og:description"
                    content="At this page you can list existing posts in our website!"
                />
            </Head>
            <Header subtitle="Socials" />
            <div className="pt-8 pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-28 lg:px-8">
                <div className="max-w-screen-lg mx-auto">
                    <div className=" pb-10">
                        <h2 className="text-4xl font-bold tracking-tight">Socials</h2>
                        <div className="mt-3 sm:mt-4">
                            <p className="text-xl leading-7 text-white">
                                My social account links to reach my various type of accounts.
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 grid gap-16 lg:grid-cols-5  lg:row-gap-12 items-center text-center justify-center">
                        {props.socials.map((social) => {
                            return (
                                <div className="items-center border rounded text-center justify-center bg-white">
                                    <a href={social.url} key={social.id}>
                                        <img
                                            src={social.icon}
                                            alt={social.id}
                                            onMouseOver={(e): void => {
                                                social.hover && (e.currentTarget.src = social.hover)
                                            }}
                                            onMouseOut={(e): void => {
                                                social.icon && (e.currentTarget.src = social.icon)
                                            }}
                                            style={{
                                                width: "200px",
                                                height: "auto"
                                                }
                                            }/>
                                    </a>
                                </div>

                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer simple={true} />
        </>
    );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    const dir = await promises.readdir("./public/socials");
    const socialIds = dir.filter((name) => name.endsWith(".json"));
    const socials = await Promise.all(
        socialIds.map(async (name) => {
            const file = await promises.readFile(join("./public/socials", name), {
                encoding: "utf8",
            });
            return { ...JSON.parse(file), id: name.replace(/\.json$/, "") };
        })
    );
    return {
        props: { socials },
    };
};

export default Socials;
