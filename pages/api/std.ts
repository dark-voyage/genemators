import { name, description, version, bugs } from "../../package.json";
import { NextApiResponse, NextApiRequest } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      name: name,
      about: description,
      version: version,
      bugs: bugs,
      message: "bot check"
    })
  );
}
