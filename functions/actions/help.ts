import { Markup } from "telegraf";
import { TelegrafContext } from "../types/telegraf";

const helpKeyboard = Markup.inlineKeyboard([
  [Markup.switchToCurrentChatButton("Search Projects", "")],
]);

const help = async (ctx: TelegrafContext) => {
  await ctx.replyWithHTML(`<b>List of available commands:</b>` +
    `\n` +
    `\n` +
    `/help - <code>show this helper message</code>` +
    `\n` +
    `\n` +
    `<i>In order to use our inline mode, switch to inline mode ` +
    `by typing: @genemabot and then start typing something there.</i>`, {
    parse_mode: "HTML",
    reply_markup: helpKeyboard,
  });
};

const helpAction = async (ctx: TelegrafContext) => {
  await ctx.editMessageText(
    `<b>List of available commands:</b>` +
    `\n` +
    `\n` +
    `/help - <code>show this helper message</code>` +
    `\n` +
    `\n` +
    `<i>In order to use our inline mode, switch to inline mode ` +
    `by typing: @genemabot and then start typing something there.</i>`,
    {
      parse_mode: "HTML",
      reply_markup: helpKeyboard,
    }
  );
};

export { help, helpAction };
