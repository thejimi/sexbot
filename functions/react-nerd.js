const Discord = require('discord.js') //Import Discord API
require('discord-inline-reply'); //Import inline replies for Discord API
const fetch = require('node-fetch'); //Import the FETCH API

module.exports = async (message, author, guild, client) => {
   var messagelink = message.content.replace(`<@${client.user.id}> `, '')
   messagelink = messagelink.replace('react nerd ','')

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
   .setAuthor("react nerd", client.user.displayAvatarURL())
   .setDescription("<a:loading:1046014857939537950>  *Reacting...*")

   const embedresult = new Discord.MessageEmbed()
   .setColor("2f3136")
   .setAuthor("react nerd", client.user.displayAvatarURL())

   try {
    channel.messages.fetch(messageid)
    .then(message2 => {
        message.lineReply(embedload).then(m => {
            message2.react("🤓")
            message2.react("1041071459705049179")
            message2.react("1041071446866280490")
            message2.react("1041071442105745428")
            message2.react("1028379726257074246")
            message2.react("1041071439719182406")
            message2.react("1041071468936691732")
            message2.react("1041071466608857138")
            message2.react("1041085564163727460").then(c => {
                embedresult.setDescription(`:nerd: Nerd reacted ${message2.author.username}`)
                m.edit(embedresult)
                m.channel.send(`${message2.author}`).then(m2 => {
                    m2.delete()
                })
            })
        })
    })
    .catch(err => {
      return message.lineReply(`Can't find this message, are you sure you provided a valid message link?\n \nExample usage: \`@${client.user.username} react nerd ${message.url}\``)
    });
   } catch (err) {
      return message.lineReply(`Can't find this message, are you sure you provided a valid message link?\n \nExample usage: \`@${client.user.username} react nerd ${message.url}\``)
   }

}