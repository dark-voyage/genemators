import { TelegrafContext } from "../types/telegraf";
import { Markup } from "telegraf";

const about = async (ctx: TelegrafContext) => {
  await ctx.replyWithPhoto("https://genemator.me/avatar.jpg", {
    caption: `<b>Senior Developer from Uzbekistan's Top 2 ¯\\_(ツ)_/¯</b>` +
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
    parse_mode: "HTML"
  });
};

export { about };