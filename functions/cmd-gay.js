const Discord = require('discord.js') //Import Discord API
require('discord-inline-reply'); //Import inline replies for Discord API
const fetch = require('node-fetch'); //Import the FETCH API

module.exports = async (message, author, guild, client) => {
    try {
        message.react("1046014857939537950")
    } catch (err) {
        message.lineReply("<a:loading:1046014857939537950> Generating the image... It will take a while.")
    }

    const canvacord = require("canvacord");
    let user = message.author
    let avatar = user.displayAvatarURL();
    let image = await canvacord.Canvas.rainbow(avatar);
    let attachment = new Discord.MessageAttachment(image, "sexbot-rainbow.gif");
    return message.lineReply(attachment);
}