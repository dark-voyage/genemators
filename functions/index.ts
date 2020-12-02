import Telegraf, { Markup } from "telegraf";
import { TelegrafContext } from "./types/telegraf";
import { NextApiRequest, NextApiResponse } from "next";
import { help, helpAction, start, inline } from "./actions";

const bot = new Telegraf<TelegrafContext>(<string>process.env.BOT_TOKEN);

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {

    /**
     * Setting up bot with its configs
     */
    const botInfo = await bot.telegram.getMe();
    bot.options.username = botInfo.username;
    console.info(
      "Server has initialized functions for",
      botInfo.username
    );

    /**
     * Commands
     */
    bot.start(async (ctx: TelegrafContext) => await start(ctx));
    bot.help(async (ctx: TelegrafContext) => await help(ctx));
    bot.action("help", async (ctx: TelegrafContext) => await helpAction(ctx));

    /**
     * Inline Query Handler
     */
    bot.on("inline_query", async (ctx: TelegrafContext) => await inline(ctx));

    /**
     * Exclusion Exceptions
     */
    bot.on("text", async (ctx: TelegrafContext) => {
      if (<string>ctx.chat?.type === "private" && <boolean>!ctx.message?.via_bot)
        await ctx.replyWithAnimation(
          "https://genemator.me/gifs/exclude.gif",
          {
            parse_mode: "HTML",
            caption: "<b>This command or message is invalid. Please see our command list for more information!</b>",
            reply_markup: Markup.inlineKeyboard([
              Markup.callbackButton(`Show available commands`, `help`),
            ]),
          }
        );
    });

    /**
     * Method Exclusions
     */
    if (req.method === "POST") {
      await bot.handleUpdate(req.body, res);
    } else {
      res.redirect(`https://t.me/${botInfo.username?.replace("@", "")}`);
    }
  } catch (error) {
    return error.message;
  }
};
