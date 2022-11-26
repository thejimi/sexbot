const Discord = require('discord.js') //Import Discord API
require('discord-inline-reply'); //Import inline replies for Discord API
const fetch = require('node-fetch'); //Import the FETCH API

module.exports = async (message, author, guild, client) => {
    let url = message.content.replace(`<@${client.user.id}> `,'')
    url = url.replace('convert video to gif ', '')

    const embed = new Discord.MessageEmbed()
    .setAuthor("Bruh",client.user.displayAvatarURL())
    .setColor("RED")
    .setDescription(`This feature is not implemented to sexbot yet.\n \n**But! You can convert your video to gif by entering this [link](https://ezgif.com/video-to-gif?url=${url})**`)

    message.lineReply(embed)
}