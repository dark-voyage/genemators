import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

export default async function postsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dir = await fs.promises.readdir("./public/posts");
  res.status(200).json(dir);
}
