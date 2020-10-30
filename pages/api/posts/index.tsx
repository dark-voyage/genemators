import { NextApiRequest, NextApiResponse } from "next";
import { promises } from "fs";

export default async function postsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dir = await promises.readdir("./");
  // const file = await promises.readFile('');
  res.status(200).json(dir);
}
