import React from "react";
import Link from "next/link";

const Notification = () => {
    return(
        <div className="bg-white">
            <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div className="pr-16 sm:text-center sm:px-16">
                    <p className="font-medium text-black">
                        <span>News: Website has been published!</span>
                        <span className="block sm:ml-2 sm:inline-block">
                          <Link href="/v1">
                            <a className="text-black font-bold underline">
                              Blog postimizni o'qing &rarr;
                            </a>
                          </Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Notification;
