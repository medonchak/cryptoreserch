const TelegramBot = require('node-telegram-bot-api');
const {TwitterApi} = require('twitter-api-v2');

// Instantiate with desired auth type (here's Bearer v2 auth)
//const twitterClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAAPjuqAEAAAAAVSD6xn%2BdtGEMdHDKGo7pG%2Fh2%2Fh4%3DbWkTjqiwRsIwDNg5c2XcNBrIj9njmkHFPtLLiWjiNfA09IMzwA');
const bot = new TelegramBot('6698797403:AAHR3QwZPj4NmQJ0Nh5JSqNLfFw86Gc7_9E', { polling: true });


// Обробка команди /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
  
    // Клавіатура з кнопками inline
    const options = {
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [{ text: 'Натисніть мене', callback_data: 'button1' }]
        ]
      })
    };
    const op1 = {reply_markup: JSON.stringify({
        keyboard: [
          [{ text: 'Реєстрація:', request_contact: true }],
        ],
        resize_keyboard: true,
        one_time_keyboard: true
      })
    };
    const op2 = {reply_markup: JSON.stringify({
        keyboard: [
          [{ text: 'Депозит до 1000$:', callback_data: '/help' }],
          [{ text: 'Введіть прізвище:', callback_data: 'enter_surname' }]
        ],
        resize_keyboard: true,
        one_time_keyboard: true
      })
    };
// Відправка повідомлення з кнопками inline
    bot.sendMessage(chatId, 'Виберіть дію:', options, op1);
  });

// Обробка команди /help
bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Список доступних команд:\n/start - Початок роботи з ботом\n/help - Відображає цей список команд");
});

//Обробка текстових повідомлень
bot.on('text', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    // Відповідаємо на повідомлення користувача
    bot.sendMessage(chatId, `Ви написали: "${messageText}"`);
});

// Обробка натискання на кнопку
bot.on('callback_query', (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;
    const data = callbackQuery.data;
  
    // Відправлення повідомлення про вибір кнопки
    bot.sendMessage(chatId, `Ви вибрали: ${data}`);
  });
console.log('Бот запущено.');
