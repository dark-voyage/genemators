/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import React from "react";

import {
  GetStaticProps,
  GetStaticPaths,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { promises as fs } from "fs";
import { join } from "path";
import Link from "next/link";

interface Props {
  markdown: string;
  meta: {
    id: string;
    title: string;
    author: string;
    publish_date: string;
    images: Array<{
      image: string;
      width: number;
      height: number;
      className: string;
      preview: boolean;
    }>;
    snippet: string;
  };
}

const postsViewHandler = (
  props: Props,
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const date = new Date(props.meta.publish_date);
  const format = new Intl.DateTimeFormat(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  res.status(200).json(props);
};

export const getStaticPaths: GetStaticPaths = async () => {
  const dir = await fs.readdir("./public/posts");
  const postIds = dir.filter((name) => name.endsWith(".json"));
  const paths = postIds.map((id) => ({
    params: { post: id.replace(/\.json$/, "") },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const post = ctx.params!.post;
  const markdown = await fs.readFile(join("./public/posts", post + ".md"), {
    encoding: "utf8",
  });
  const meta = await fs.readFile(join("./public/posts", post + ".json"), {
    encoding: "utf8",
  });
  return {
    props: {
      markdown,
      meta: { ...JSON.parse(meta), id: post },
    },
  };
};

export default postsViewHandler;
