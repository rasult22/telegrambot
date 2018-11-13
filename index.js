const Telegrambot = require('node-telegram-bot-api');
const token = '720593334:AAEXGPSbzKA9bpXOFdy-v54oScW3OLFECKo';

const bot = new Telegrambot(token,{
    polling: true
})


bot.on('message',(msg)=>{
    const id = msg.chat.id;
    bot.sendMessage(id,`Hello ${msg.chat.first_name}`);
    bot.sendMessage(id, 'What does ' + msg.text + ' mean?');
})