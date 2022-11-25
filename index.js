const Discord = require('discord.js')
require('discord-inline-reply');
const { Client, Intents, Collection, MessageEmbed, MessageActionRow, MessageButton, DiscordAPIError } = require('discord.js');
const client = new Client()


client.on("ready", () => {
  var channel = client.channels.cache.get('823953803409096806')
  channel.send('just restarted my braun 🧠🧠]')
  
    console.log(`The bot is online!`)
    client.user.setActivity(`v2! | discord.gg/memee`, {
      type: "WATCHING"
    });
});

var makeReply = require('./makeReply.js')

client.on("message", async message => {
if(message.author.id === client.user.id){
  return;
}
if(!message.guild){
  var reply = await makeReply(message.content,message.author.username)
  message.channel.startTyping();
setTimeout(function(){
    message.channel.stopTyping();
    message.channel.send({content:reply})
}, 2000);
return;
}
  if (message.content.includes("@everyone")) {
    return
  }
  if (message.content.includes("@here")) {
    return
  }
  if (message.content === "!shelp") {
    return message.lineReplyNoMention(`> **sexbot help command**\n \n- Commands:\n\`!sservers, !scontribute, !shelp\`\n \n- How to use sexbot?\n*Mention me in a message or dm me to talk.*`)
  }
  if (message.content === "!sservers") {
    return message.lineReplyNoMention(`im in ${client.guilds.cache.size} guilds`)
  }
  if (message.content === "!scontribute") {
    return message.lineReplyNoMention(`Join discord.gg/memee and upload your sexbot reply suggestion.`)
  }
  if (message.mentions.has(client.user)) {
    var reply = await makeReply(message.content,message.author.username)
    message.channel.startTyping();
  setTimeout(function(){
      message.channel.stopTyping();
      message.lineReply({content:reply})
  }, 2000);
}});

client.login("MTAxNDYzMzAyNzMxOTY0ODI3Nw.GAcz7v.BhN7V8gBgC5_AUys1R6kC1gkK_M2se6EioXZB8")//MTA0Mzc5OTQyMTAwOTI4NTE1MQ.GSkNmf.3MpdyInVaUOXLJebyVubOXjJ-KGsL15RNe1-n4