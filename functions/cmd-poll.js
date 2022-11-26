const Discord = require('discord.js') //Import Discord API
require('discord-inline-reply'); //Import inline replies for Discord API
const fetch = require('node-fetch'); //Import the FETCH API

module.exports = async (message, author, guild, client) => {
    var pollcontent = message.content.replace(`<@${client.user.id}>`, '')
    pollcontent = pollcontent.replace("cmd poll", '')

    message.channel.send(`**:speech_left: ${pollcontent}**\n👤 ${author}`).then(m => {
        try {
            m.react("👍🏻")
            m.react("👎🏻")
        } catch (err) {
            return message.channel.send("I can't react to messages 💀")
        }
    })

    message.delete()
}