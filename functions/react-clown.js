const Discord = require('discord.js') //Import Discord API
require('discord-inline-reply'); //Import inline replies for Discord API
const fetch = require('node-fetch'); //Import the FETCH API

module.exports = async (message, author, guild, client) => {
   var messagelink = message.content.replace(`<@${client.user.id}> `, '')
   messagelink = messagelink.replace('react clown ','')

   var ids = messagelink.replace('https://discord.com/channels/','') 
   ids = ids.replace('https://ptb.discord.com/channels/','')
   ids = ids.replace('https://canary.discord.com/channels/','')

   var channelandmessage = ids.replace(`${guild.id}/`,'')
   var splittedids = channelandmessage.split('/')
   var channelid = splittedids[0]
   var messageid = splittedids[1]

   var channel = client.channels.cache.get(channelid)

   const embedload = new Discord.MessageEmbed()
   .setColor("GREY")
   .setAuthor("react clown", client.user.displayAvatarURL())
   .setDescription("<a:loading:1046014857939537950>  *Reacting...*")

   const embedresult = new Discord.MessageEmbed()
   .setColor("2f3136")
   .setAuthor("react clown", client.user.displayAvatarURL())

   try {
    channel.messages.fetch(messageid)
    .then(message2 => {
        message.lineReply(embedload).then(m => {
            message2.react("🤡")
            message2.react("1028379677183713350")
            message2.react("1041071478524883004")
            message2.react("1041071480764645376")
            message2.react("1041071482756923392")
            message2.react("1041097049531236412")
            message2.react("1011706000199389246")
            message2.react("1042098780230652035").then(c => {
                embedresult.setDescription(`:clown: Clown reacted ${message2.author.username}`)
                m.edit(embedresult)
                m.channel.send(`${message2.author}`).then(m2 => {
                    m2.delete()
                })
            })
        })
    })
    .catch(err => {
      return message.lineReply(`Can't find this message, are you sure you provided a valid message link?\n \nExample usage: \`@${client.user.username} react clown ${message.url}\``)
    });
   } catch (err) {
      return message.lineReply(`Can't find this message, are you sure you provided a valid message link?\n \nExample usage: \`@${client.user.username} react clown ${message.url}\``)
   }

}