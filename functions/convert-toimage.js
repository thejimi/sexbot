const Discord = require('discord.js') //Import Discord API
require('discord-inline-reply'); //Import inline replies for Discord API
const fetch = require('node-fetch'); //Import the FETCH API

module.exports = async (message, author, guild, client) => {
    try {
        message.react("1046014857939537950")
    } catch (err) {
        message.lineReply("<a:loading:1046014857939537950> Generating the image... It will take a while.")
    }

    const request = require('request');

    let url = message.content.replace(`<@${client.user.id}> `,'')
    url = url.replace('convert gif to image ', '')
    request({ url, encoding: null }, (err, resp, buffer) => {
        var attachment = new Discord.MessageAttachment(buffer, "sexbot-converter.png");
        return message.lineReply(attachment);
    });

    setTimeout(function(){
        message.lineReplyNoMention("Got no response? It means that you haven't provided a valid media url or you posted an attachment instead of a link.")
    }, 5000);  
}