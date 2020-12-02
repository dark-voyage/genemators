import { NextApiRequest, NextApiResponse } from "next";
import Telegraf from "telegraf";
import { help, helpAction, start } from "../actions";
import { TelegrafContext } from "../types/telegraf";

const bot = new Telegraf<TelegrafContext>(<string>process.env.BOT_TOKEN);

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const botInfo = await bot.telegram.getMe();
    bot.options.username = botInfo.username;
    console.info(
      "Server has initialized bot username using Webhook:",
      botInfo.username
    );

    bot.on('text', ctx => ctx.reply("responded"))
    // bot.start(async (ctx: TelegrafContext) => await start(ctx));
    // bot.help(async (ctx: TelegrafContext) => await help(ctx));
    // bot.action("help", async (ctx: TelegrafContext) => await helpAction(ctx));
    // bot.on("inline_query", async (ctx: TelegrafContext) => await inline(ctx));

    if (req.method === "POST") {
      await bot.handleUpdate(req.body, res);
    } else {
      res.redirect(`https://t.me/${botInfo.username?.replace("@", "")}`);
    }
  } catch (error) {
    return error.message;
  }
};
