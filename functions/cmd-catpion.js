const Discord = require('discord.js') //Import Discord API
require('discord-inline-reply'); //Import inline replies for Discord API
const fetch = require('node-fetch'); //Import the FETCH API

module.exports = async (message, author, guild, client) => {
    var content = message.content.replace(`<@${client.user.id}> `, '')
    content = content.replace("cmd captioncat ", '')
    fetch(`https://cataas.com/cat/cute/says/${content}?json=true`)
    .then((response) => response.json())
    .then((data) => {
        const embedload = new Discord.MessageEmbed()
        .setColor("GREY")
        .setAuthor("cmd captioncat", client.user.displayAvatarURL())
        .setDescription("<a:loading:1046014857939537950>  *Loading...*")

        const embedresult = new Discord.MessageEmbed()
        .setColor("2f3136")
        .setAuthor("cmd captioncat", client.user.displayAvatarURL())
        .setImage(`https://cataas.com${data.url}`)

        message.lineReply(embedload).then(m => {
            setTimeout(function(){
                m.edit(':3', embedresult)
            }, 1000);
        })
    });
}