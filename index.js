const TelegramBot = require("node-telegram-bot-api");
const token = "7098289436:AAHr2sbOpSKqt4XX1Sv6y2nl-kXRdrIyguw";

const bot = new TelegramBot(token, { polling: true });




bot.on("message", async (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;

  await bot.sendMessage(chatId , 'suxrob')

 
})

/////////////////////////////////////////////



