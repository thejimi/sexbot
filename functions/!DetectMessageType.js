const Discord = require('discord.js') //Import Discord API
require('discord-inline-reply'); //Import inline replies for Discord API
const fetch = require('node-fetch'); //Import the FETCH API

//Import functions
const cat = require('./cmd-cat.js')
const poll = require('./cmd-poll.js')
const gay = require('./cmd-gay.js')
const catpion = require('./cmd-catpion.js')
const nerdreact = require('./react-nerd.js')
const clownreact = require('./react-clown.js')
const wreact = require('./react-w.js')
const lreact = require('./react-l.js');
const togif = require('./convert-togif.js')
const toimage = require('./convert-toimage.js')
const vidtogif = require('./convert-vidtogif.js')
const AI = require('./AI.js')
const ChatAI = require('./cleverbot.js')

module.exports = async (message, author, guild, client) => {
    if(message.content.includes("cmd cat")){
       return cat(message, author, guild, client)
    }

    if(message.content.includes("cmd poll")){
        return poll(message, author, guild, client)
    }

    if(message.content.includes("cmd gay")){
        return gay(message, author, guild, client)
    }

    if(message.content.includes("cmd captioncat")){
        return catpion(message, author, guild, client)
    }

    if(message.content.includes("convert image to gif")){
        return togif(message, author, guild, client)
    }

    if(message.content.includes("convert gif to image")){
        return toimage(message, author, guild, client)
    }

    if(message.content.includes("convert video to gif")){
        return vidtogif(message, author, guild, client)
    }

    if(message.content.includes("react nerd")){
        return nerdreact(message, author, guild, client)
    }

    if(message.content.includes("react clown")){
        return clownreact(message, author, guild, client)
    }

    if(message.content.includes("react w")){
        return wreact(message, author, guild, client)
    }

    if(message.content.includes("react l")){
        return lreact(message, author, guild, client)
    }

    if(message.content.startsWith(`<@${client.user.id}> chatai `)){
        return ChatAI(message, author, guild, client)
    }

    var response = await AI(message.content,message.author.username)

    if(message.guild){
        message.channel.startTyping();
        setTimeout(function(){
            message.channel.stopTyping();
            return message.lineReply(response)
        }, 2000);
    } else {
        message.channel.startTyping();
        setTimeout(function(){
            message.channel.stopTyping();
            return message.channel.send(response)
        }, 2000);
    }
}