const Telegrambot = require('node-telegram-bot-api');
const token = '720593334:AAEXGPSbzKA9bpXOFdy-v54oScW3OLFECKo';

const bot = new Telegrambot(token,{
    polling: {
        interval:300,
        autoStart: true,
        params:{
            timeout:10
        }
    }
})


bot.on('message',(msg)=>{
    const id = msg.chat.id;
    bot.sendMessage(id,`Hello ${msg.chat.first_name}`);
   // bot.sendMessage(id, debug(msg));
    if(msg === "Привет")
    {
        bot.sendMessage(id,`Привет урод ${msg.chat.first_name}`);
    }
})


function debug(obj = {}){
    return JSON.stringify(obj,null, 4);
}