import React from "react";
import Link from "next/link";

const Notification = ({ news }: { news: string }) => {
    return(
        <div className="bg-white">
            <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div className="pr-16 sm:text-center sm:px-16">
                    <p className="font-medium text-black">
                        <span><span className="font-bold">News:</span> {news}</span>
                        <span className="block sm:ml-2 sm:inline-block">
                          <Link href="/news">
                            <a className="text-black underline">
                              Read my blog &rarr;
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
