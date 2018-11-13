const Telegrambot = require('node-telegram-bot-api');
const token = '720593334:AAEXGPSbzKA9bpXOFdy-v54oScW3OLFECKo';

const bot = new Telegrambot(token,{
    polling: true
})


bot.on('message',(msg)=>{
    console.log(msg);
})