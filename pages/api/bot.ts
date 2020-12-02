import { handler } from "../../functions";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await handler(req, res);
  } catch (e) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html");
    res.send("<h1>Are u winnin' son?</h1>");
    console.error(e.message);
  }
}
