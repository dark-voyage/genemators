/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import React from "react";
import { GetStaticProps, NextApiRequest, NextApiResponse } from "next";

import { promises } from "fs";

import { join } from "path";
import Link from "next/link";

interface PostMeta {
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
}

interface Props {
  posts: PostMeta[];
}

const postsHandler = (
  props: Props,
  res: NextApiResponse,
  req: NextApiRequest
) => {
  props.posts.map((post) => {
    const date = new Date(post.publish_date);
    const format = new Intl.DateTimeFormat(undefined, {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  });
  res.status(200).json(props);
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const dir = await promises.readdir("./public/posts");
  const postIds = dir.filter((name) => name.endsWith(".json"));
  const posts = await Promise.all(
    postIds.map(async (name) => {
      const file = await promises.readFile(join("./public/posts", name), {
        encoding: "utf8",
      });
      return { ...JSON.parse(file), id: name.replace(/\.json$/, "") };
    })
  );
  return {
    props: { posts },
  };
};

export default postsHandler;
