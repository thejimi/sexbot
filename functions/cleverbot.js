const Discord = require('discord.js') //Import Discord API
require('discord-inline-reply'); //Import inline replies for Discord API
const fetch = require('node-fetch'); //Import the FETCH API

module.exports = async (message, author, guild, client) => {
   const cleverbot = require('cleverbot-free') //Install the cleverbot api

   var text = message.content.replace(`<@${client.user.id}> botai `, '')
   let conversation = [] //History of the conversation

   cleverbot(text, conversation).then(res => {
        conversation.push(text)
        conversation.push(res)

        message.channel.startTyping();
        setTimeout(function(){
            message.channel.stopTyping();
            return message.lineReply(res)
        }, 2000);
   })
}
