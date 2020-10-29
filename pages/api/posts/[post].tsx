/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import React from "react";

import { NextApiRequest, NextApiResponse, } from "next";
import { promises as fs } from "fs";
import { join } from "path";

const postsViewHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const dir = await fs.readdir("./public/posts");


  res.status(200).json(dir);
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const dir = await fs.readdir("./public/posts");
//   const postIds = dir.filter((name) => name.endsWith(".json"));
//   const paths = postIds.map((id) => ({
//     params: { post: id.replace(/\.json$/, "") },
//   }));
//   return { paths, fallback: false };
// };
//
// export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
//   const post = ctx.params!.post;
//   const markdown = await fs.readFile(join("./public/posts", post + ".md"), {
//     encoding: "utf8",
//   });
//   const meta = await fs.readFile(join("./public/posts", post + ".json"), {
//     encoding: "utf8",
//   });
//   return {
//     props: {
//       markdown,
//       meta: { ...JSON.parse(meta), id: post },
//     },
//   };
// };

export default postsViewHandler;
