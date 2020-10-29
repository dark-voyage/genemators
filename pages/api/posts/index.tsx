/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */

import React from "react";
import { NextApiRequest, NextApiResponse } from "next";

import { promises } from "fs";
import { join } from "path";

const postsHandler = async (res: NextApiResponse, req: NextApiRequest) => {
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
  res.status(200).json({ posts });
};

export default postsHandler;
