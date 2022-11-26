const Discord = require('discord.js') //Import Discord API
require('discord-inline-reply'); //Import inline replies for Discord API
const fetch = require('node-fetch'); //Import the FETCH API

module.exports = async (message, author, guild, client) => {
    const embedhelp = new Discord.MessageEmbed()
    .setColor("2f3136")
    .setAuthor("sexbot help panel", client.user.displayAvatarURL())
    .setDescription("sexbot is a dumb chatbot that acts like an average discord user.")
    .addField("» How to use?", 'To talk with me, you just need to mention me in a message.')
    .addField("» \"Sexbot is too dumb\" - :nerd:", 'Want a more "intelligent" version of sexbot? Mention me and add `chatai` at the beginning of your message.')
    .addField('» "I don\'t want to mention all the time\" - :nerd:', "You can talk with me on DM's, or create a channel that contains 'sexbot-chat'.")
    .addField("» \"I know how to make sexbot better\" - :nerd:", "We love to hear that! You can [contribute on Github](https://github.com/thejimi/sexbot) :heart:")

    const embedcommands = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setAuthor("commands", client.user.displayAvatarURL())
    .setDescription("sexbot also has some useful commands!\n \n```@sexbot cmd cat - Get a random cat image\n@sexbot cmd captioncat <text> - Generate a cat image that says something\n@sexbot cmd gay - Become gay\n@sexbot poll <message> - Create a poll```\n```@sexbot convert image to gif <url>\n@sexbot convert gif to image <url>\n@sexbot convert video to gif```\n```@sexbot react nerd <messagelink>\n@sexbot react clown <messagelink>\n@sexbot react l <messagelink>\n@sexbot react w <messagelink>```")

    message.lineReplyNoMention(embedhelp)
    message.channel.send(embedcommands)
}