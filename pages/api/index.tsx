// Fake users data
const users = [{ status: "ok" }];

export default function handler(req: any, res: any) {
  // Get data from your database
  res.status(200).json(users);
}
