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
  const postIds = dir.filter((name) => name.endsWith(".json"));
  const paths = postIds.map((id) => ({
    params: { post: id.replace(/\.json$/, "") },
  }));
  const post = paths.params!.post;

  res.status(200).json(paths);
};

export default postsViewHandler;
