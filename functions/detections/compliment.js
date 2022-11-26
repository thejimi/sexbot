module.exports = (msc, author) => {
    var detections = [`😽`,"you are", "you look nice", "your cool", "you're", "youre", "i think you are", "i think your", "i think you're", "i think youre", 'love you', '<3', 'ilysm', 'ily', 'ur hot', ":heart:", "❤️"]

    var msc2 = msc.replace(/@everyone/g, 'noping')
    msc2 = msc2.replace(/@here/g, 'noping')
    msc2 = msc2.replace(detections[0], '')
    msc2 = msc2.replace(detections[1], '')
    msc2 = msc2.replace(detections[2], '')
    msc2 = msc2.replace(detections[3], '')
    msc2 = msc2.replace(detections[4], '')
    msc2 = msc2.replace(detections[5], '')
    msc2 = msc2.replace(detections[6], '')
    msc2 = msc2.replace(detections[7], '')
    msc2 = msc2.replace(detections[8], '')
    msc2 = msc2.replace('<@1043799421009285151>', '')
    msc2 = msc2.replace(/ /g, '')


    var replies = ['https://cdn.discordapp.com/attachments/1009456381071470724/1040330102979960903/acqzo_video_1651329243913_1.mp4', 'thank you', `i think you're ${msc2} too`, 'thanks!!', 'omg thank youu', '💕💕💕💕', 'tysm', 'you made my day', 'ily too', 'bro thanks', ':kiss:', `im not that ${msc2} 🫢`, `am i really ${msc2}?`, `i dont think im ${msc2}`]
    var reply = replies[Math.floor(Math.random() * replies.length)]
    var donejson = {
        detections:detections, 
        replies:replies,
        reply:reply
    }

    return donejson
}