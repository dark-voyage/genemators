// Fake users data
import { NextApiRequest, NextApiResponse } from "next";

const message = [
  {
    status: "ok",
    links: {
      home: "/api",
      posts: "/posts",
    },
  },
];

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(message);
}
