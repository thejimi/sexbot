module.exports = (msc, element, author) => {
    var detections = ["fuck you", 'bitch', 'retard', 'nigga', "you're stupid", 'faggot', 'fag', 'niga', 'nigger', 'niger', 'fatass', 'fat', 'fuck u', 'i hate you', 'kys', 'die', 'your dumb', 'stupid', 'dumb',`kill yourself`]
    var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
    var replies = [`Nice opinion one small issue I am inside your home`,`https://cdn.discordapp.com/attachments/1043835820945195070/1049929856353312818/unknown.png`,`https://tenor.com/view/cat-shut-up-gif-25699987`,`https://cdn.discordapp.com/attachments/1043835820945195070/1044303218131357696/unknown.png`,`have you considered suicide?`,`https://cdn.discordapp.com/attachments/991835962294415472/1046405752320958555/girls.gif`,'https://media.discordapp.net/attachments/1006667144555151390/1020380940658294854/speechbubble.gif','https://cdn.discordapp.com/attachments/1006667144555151390/1043799912153874512/super_cool.mp4', 'me rn: https://cdn.discordapp.com/attachments/1006667144555151390/1043820263839633441/Sad_pain.mp4',`${author}:\n \nhttps://cdn.discordapp.com/attachments/1009456381071470724/1040313995627868170/trim.E5D79854-BAE1-4A98-84D5-2EF0EF70F3D6.mov`, 'kys', 'nah fuck you man', `nah, its u being a ${element}`, 'https://tenor.com/view/there-is-a-zip-bomb-in-your-mailbox-zip-bomb-pipe-bomb-there-is-a-pipe-bomb-in-your-mailbox-gif-22623061', 'https://cdn.discordapp.com/attachments/1009456381071470724/1040319351154290758/do_you_really_think_that_is_normal.png','https://cdn.discordapp.com/attachments/1009456381071470724/1043217650471411764/MemeFeedBot_23.mp4', 'https://cdn.discordapp.com/attachments/1013546438858383451/1043824932108369930/Gangster_Broccoli_4k_Remastered.mp4', `${ip}`, `hello ${author} :wave: ${ip}`]
    var reply = replies[Math.floor(Math.random() * replies.length)]
    var donejson = {
        detections:detections, 
        replies:replies,
        reply:reply
    }

    return donejson
}