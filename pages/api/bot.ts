import * as fuzzy from "fuzzy";
import Telegraf, { Markup } from "telegraf";
import { TelegrafContext } from "../../types/telegraf";
import { NextApiRequest, NextApiResponse } from "next";

const bot = new Telegraf<TelegrafContext>(<string>process.env.BOT_TOKEN);

export default async function telegram(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    /**
     * Setting up bot with its configs
     */
    const botInfo = await bot.telegram.getMe();
    bot.options.username = botInfo.username;
    console.info("Server has initialized functions for", botInfo.username);

    /**
     * Commands
     */
    bot.start(async (ctx: TelegrafContext) => {
      await ctx.replyWithHTML(
        `<b>Welcome to Genemator's Assistant!</b>` +
          `\n` +
          `\n` +
          `This bot helps you to manage with information about Genemator.` +
          `\n` +
          `With the help of this bot you can do:` +
          `\n` +
          `\n` +
          `<code>* Check current status of the Genemator</code>` +
          `\n` +
          `<code>* Check statuses of github repositories</code>` +
          `\n` +
          `\n` +
          `<i>In order to see full detailed usage information of the bot, press the button below.</i>`,
        {
          parse_mode: "HTML",
          reply_markup: Markup.inlineKeyboard([
            [Markup.callbackButton("Show detailed information", "help")],
          ]),
        }
      );
    });
    bot.help(async (ctx: TelegrafContext) => {
      await ctx.replyWithHTML(
        `<b>List of available commands:</b>` +
          `\n` +
          `\n` +
          `/help - <code>show this helper message</code>` +
          `\n` +
          `/about - <code>get information about genemator</code>` +
          `\n` +
          `\n` +
          `<i>In order to use our inline mode, switch to inline mode ` +
          `by typing: @genemabot and then start typing something there.</i>`,
        {
          parse_mode: "HTML",
          reply_markup: Markup.inlineKeyboard([
            [Markup.switchToCurrentChatButton("Search Projects", "")],
          ]),
        }
      );
    });
    bot.command("about", async (ctx: TelegrafContext) => {
      await ctx.replyWithHTML(
        `<b>Senior Developer from Uzbekistan's Top 2 ¯\\_(ツ)_/¯</b>` +
          `\n` +
          `\n` +
          `Hello dear visitor! I’m Sokhibjon Orzikulov, who is famous under the nickname Genemator. I’m glad to see you visit my website. For the beginning, let me introduce myself. I’m a Senior Full-Stack developer with more than 7 years of experience. Although I professionally code using 7 different programming languages as JavaScript, TypeScript, Java, Kotlin, C, C++, Assembler, Python2, Python3. I mainly use C++ for its total control and wide range of functions. That said, my knowledge is not limited to coding. I am also a specialist in creating 3D driven video and photo. Besides, I prefer Cinema 4D as 3D engine and utilize Adobe Products for editing purposes. I can also create different songs and music for my projects by using special applications on a professional level. For the time being, I am a second-year student at Westminster International University in Tashkent. My nationality is Uzbek and I’m only 19 years old 😎` +
          `\n` +
          `<b>DIRECTIONS THAT I COVER</b>` +
          `\n` +
          `\n` +
          `<code>* Front End</code>` +
          `\n` +
          `<i>With the help of trendy JavaScript frameworks as React, Vue or maybe Next.JS I can build speedy and beautifully designed web apps with out-of-box functionalities.</i>` +
          `\n` +
          `<code>* Back End</code>` +
          `\n` +
          `<i>I am able to build up my own server from zero to hero with various programming languages and frameworks. For example, Express.js on Node.js, Django or Flask on Python, also Oak on Deno.land</i>` +
          `\n` +
          `<code>* Database</code>` +
          `\n` +
          `<i>Thanks for database programming knowledge, I have possibilities to create server with fully integrated datasets. As an example, postgresql, mysql, vanilla sql and so on.</i>` +
          `\n` +
          `<code>* Scripting</code>` +
          `\n` +
          `<i>With my knowledge on C, C++ or Python programming languages, I can build ready setup & build scripts, startups or unit tests for project.</i>` +
          `\n` +
          `\n` +
          `<i>In order to see full detailed usage information of the bot, press the button below.</i>`,
        {
          parse_mode: "HTML",
        }
      );
    });
    bot.action("help", async (ctx: TelegrafContext) => {
      await ctx.editMessageText(
        `<b>List of available commands:</b>` +
          `\n` +
          `\n` +
          `/help - <code>show this helper message</code>` +
          `\n` +
          `/about - <code>get information about genemator</code>` +
          `\n` +
          `\n` +
          `<i>In order to use our inline mode, switch to inline mode ` +
          `by typing: @genemabot and then start typing something there.</i>`,
        {
          parse_mode: "HTML",
          reply_markup: Markup.inlineKeyboard([
            [Markup.switchToCurrentChatButton("Search Projects", "")],
          ]),
        }
      );
    });

    /**
     * Inline Query Handler
     */
    bot.on("inline_query", async ({ inlineQuery, answerInlineQuery }) => {
      const base = "https://github.com/genemators/";
      const thumb = "https://genemator.me/favicon.png";
      let results = [],
        indexation = 1,
        // @ts-ignore
        repos = Object.values(
          await fetch("https://api.github.com/users/genemators/repos").then(
            (r) => {
              return r.json();
            }
          )
        ).map(function (obj) {
          // @ts-ignore
          return obj["name"];
        });
      let similarities = await fuzzy
        // @ts-ignore
        .filter(inlineQuery.query, repos)
        .sort()
        .slice(0, 20);
      let found = await similarities.map(function (obj) {
        return obj.string;
      });
      for (let key of found) {
        let data = await fetch(
          `https://api.github.com/repos/genemators/${key}`
        ).then((r) => {
          return r.json();
        });
        results.push({
          type: "article",
          id: indexation,
          url: base + key,
          title: key,
          thumb_url: thumb,
          description: `${data["description"]}`,
          reply_markup: Markup.inlineKeyboard(
            [
              Markup.urlButton(`GitHub`, `${data["html_url"]}`),
              Markup.urlButton(
                `Download`,
                `https://github.com/${data["full_name"]}/archive/master.zip`
              ),
              Markup.switchToCurrentChatButton(`Repositories`, ``),
            ],
            { columns: 2 }
          ),
          input_message_content: {
            message_text:
              `<b><a href="${data["html_url"]}">〰 GitHub Project Review 〰</a></b>` +
              `\n` +
              `\n` +
              `<b>Description:</b> ${data["description"]}` +
              `\n` +
              `<b>Programming Language:</b> ${data["language"]}` +
              `\n` +
              `<b>Created Date:</b> ${data["created_at"]}` +
              `\n` +
              `\n` +
              `<code>👁: ${data["watchers_count"]}</code> <b>|</b> ` +
              `<code>🌟: ${data["stargazers_count"]}</code> <b>|</b> ` +
              `<code>👥: ${data["subscribers_count"]}</code> <b>|</b> ` +
              `<code>🔃: ${data["forks_count"]}</code> <b>|</b> ` +
              `<code>❗: ${data["open_issues_count"]}</code>`,
            parse_mode: "HTML",
            disable_web_page_preview: true,
          },
        });
        indexation++;
      }
      // @ts-ignore
      return answerInlineQuery(results);
    });

    /**
     * Exclusion Exceptions
     */
    bot.on("text", async (ctx: TelegrafContext) => {
      if (<string>ctx.chat?.type === "private")
        await ctx.replyWithHTML(
          "<b>This command or message is invalid. Please see our command list for more information!</b>",
          {
            parse_mode: "HTML",
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
  } catch (e) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html");
    res.send("<h1>Are you winnin' son?</h1>");
    console.error(e.message);
  }
}
