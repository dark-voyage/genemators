import Telegraf from "telegraf";
import { TelegrafContext } from "../types/telegraf";
import { start, help, helpAction, inline } from "..";

export const bot = new Telegraf<TelegrafContext>(<string>process.env.BOT_TOKEN);

export const initialization = async () => {
  bot.start(async (ctx: TelegrafContext) => await start(ctx));
  bot.help(async (ctx: TelegrafContext) => await help(ctx));
  bot.action("help", async (ctx: TelegrafContext) => await helpAction(ctx));
  bot.on("inline_query", async (ctx: TelegrafContext) => await inline(ctx));
};
