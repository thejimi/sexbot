module.exports = (msc, author) => {
    var detections = []
    var replies = [`https://cdn.discordapp.com/attachments/1043835820945195070/1049929856353312818/unknown.png`,`https://cdn.discordapp.com/attachments/1043835820945195070/1049851801509314601/4chan-speech-bubble.gif`,`yea? https://cdn.discordapp.com/attachments/1043835820945195070/1049809655116877834/American_Psycho_2000.webm`,`https://cdn.discordapp.com/attachments/1043835820945195070/1048722437728120932/attachment.gif`,`** **`,`I Think that would affect lebrons legacy, `,`https://cdn.discordapp.com/attachments/1043835820945195070/1047832281894637628/attachment.gif`,`Today is a good day to lose anal innocence!`,`Please repeat that`,`https://cdn.discordapp.com/attachments/1043835820945195070/1045302218582130718/video0-2_2.mp4`,`https://cdn.discordapp.com/attachments/991835962294415472/1046405136819429496/Mhr.mp4`,`AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA https://cdn.discordapp.com/attachments/991835962294415472/1046406509883572244/received_2330631957098708.mp4`,`your eyes and both kidneys has been donated.   thank you for your kindness.`,`https://cdn.discordapp.com/attachments/949025956658552902/1046125150678032394/trim.90851EB3-5094-4DF4-90C6-8C2BAB12A298.mov`,`do you think im joking? https://cdn.discordapp.com/attachments/949025956658552902/1046144238292848751/trim.7ECF2FB9-BC40-44D5-86BC-DBA8C2C2BE76.mov`,`https://cdn.discordapp.com/attachments/1046072918330843188/1046183048292606022/MemeFeedBot-1.mp4`,`https://cdn.discordapp.com/attachments/823953803409096806/1045772249531162664/image.jpg`,`https://tenor.com/view/meevin-melvin-hes-coming-321-run-gif-26186363`,`https://cdn.discordapp.com/attachments/1026216717891944478/1045474828313968791/2EC3FC50-419B-42B3-8CB4-7AE9EF84B634.jpeg`,`let me guess, your gay :yourefat:`,`wsg gang`,`wsg`,`bound 2`,`epoc`,`@everone`,`${author} when ssex eurah3 3333333`,`siyl willy`,`silly willy`, `so silly ${author}`,'fuck you 🫵🫵🫵🫵🫵🫵🫵🫵🫵🫵',`${author}, keep yourself safe, NOW!`,`${author} wtf no`,`${author} Yeah suuuuuuure.`,'i have no idea','ayo?\n🤨 📸','https://cdn.discordapp.com/attachments/1009457119159926785/1043622406759137360/kthoyo7e5lp91.png','https://cdn.discordapp.com/attachments/1009457119159926785/1043624378107166810/property_of_Bohuv_nejsilnejsi_valecnik_84.mp4','https://cdn.discordapp.com/attachments/1009457119159926785/1043795224931078286/310681329_624793822700013_3579882953739917914_n.mp4','crazy','xdd','!!!',':nerd:','sex\'ent','you sound like your underage','im winning','agree','for real?','nah bruhh tahts crazy','https://cdn.discordapp.com/attachments/1006667144555151390/1043717263276126258/trim.1E40D10B-FA8F-4E50-8CC8-A0965AF8B39C.mp4','https://media.discordapp.net/attachments/1006667144555151390/1020380940658294854/speechbubble.gif','https://cdn.discordapp.com/attachments/1006667144555151390/1043819037697773579/trim.6A0A434E-992F-4D3C-B81B-7B3D9655ABFE.mp4','https://cdn.discordapp.com/attachments/1013546438858383451/1043824932108369930/Gangster_Broccoli_4k_Remastered.mp4', 'https://cdn.discordapp.com/attachments/1009456381071470724/1040319351154290758/do_you_really_think_that_is_normal.png', `https://cdn.discordapp.com/attachments/1009456381071470724/1040884521295425627/unknown.png`, 'ok!', 'what??????', 'watth?', 'whar?', 'epic', 'stfu', 'not cool', 'thumbs down compadre', 'unloko', 'https://cdn.discordapp.com/attachments/1006667144555151390/1043585249411608576/togif.gif', 'https://cdn.discordapp.com/emojis/1010925703249793076.gif?v=1&size=48&quality=lossless', 'https://cdn.discordapp.com/attachments/1006667144555151390/1038451477221490708/image0-354.gif', 'https://tenor.com/view/the-j-letter-j-pear-butt-bv0j-gif-22468236', 'https://media.discordapp.net/attachments/1009383133726130216/1038555164036046899/EBABBF86-63BC-419B-BC5B-DC05624CF4AD.gif', 'https://media.discordapp.net/attachments/769200587354013728/997911213382053938/SPOILER_speed-1-1.gif', 'https://cdn.discordapp.com/emojis/1011703842276134982.gif?v=1&size=48&quality=lossless', 'https://media.discordapp.net/attachments/998802851151237151/1005336781643841616/unknown.gif', 'https://media.discordapp.net/attachments/823953803409096806/1011585352953233519/270891BF-F497-4887-B611-CC05D1666AF9.gif', 'https://media.discordapp.net/attachments/935989994735169546/1006608226676129832/306CE84B-E1E8-4443-A0DB-72B90D30BF48.gif', 'https://media.discordapp.net/attachments/940018559894061126/982598764730662983/ezgif.com-gif-maker.gif', 'https://media.discordapp.net/attachments/778438906101628978/895801293728268328/image0.gif', 'https://tenor.com/view/what-a-surprise-horse-gif-22766444', 'all good man', 'NEI', 'Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine: Fortnite', 'Θα φιλήσω τον Jimi απόψε γιατί είμαστε φίλοι και τον αγαπώ', 'GAH DAMN https://cdn.discordapp.com/attachments/1009383133726130216/1043566010239819927/Screenshot_20221106-160833_1.jpg', 'the procedure.............\n \nhttps://tenor.com/view/cat-femur-breaker-radlcies-gif-24136082', 'how about i fucking kill you? how avbout that ? https://cdn.discordapp.com/attachments/1009456381071470724/1040824569843417108/20221109_140001.jpg']
    var reply = replies[Math.floor(Math.random() * replies.length)]
    var donejson = {
        detections:detections, 
        replies:replies,
        reply:reply
    }

    return donejson
}