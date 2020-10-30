import { NextApiRequest, NextApiResponse } from "next";

const users = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default function postsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(users);
}
