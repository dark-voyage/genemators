import { bot, initialization } from "./bot";
import { NextApiRequest, NextApiResponse } from "next";

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const botInfo = await bot.telegram.getMe();
    bot.options.username = botInfo.username;
    console.info(
      "Server has initialized bot username using Webhook:",
      botInfo.username
    );

    await initialization();

    if (req.method === "POST") {
      await bot.handleUpdate(req.body, res);
    } else {
      res.redirect("https://t.me/genemabot");
    }
  } catch (error) {
    return error.message;
  }
};
