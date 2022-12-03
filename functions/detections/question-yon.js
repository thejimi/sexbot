module.exports = (msc, author) => {
    var detections = [" do ", ' are ', ' does ', ' is ', ' has ', ' can we ', ' can you ', ' can i ', ' am i ', ' am ', ' im ', "?"]
    var replies = [`${msc}`, 'yes', 'nah','no', 'idk', 'maybe?', 'definitely', 'https://cdn.discordapp.com/attachments/1009383133726130216/1043821892102012938/trim.9B58117E-87CA-4B8F-A6AE-DEE69B944AC0.mov']
    var reply = replies[Math.floor(Math.random() * replies.length)]
    var donejson = {
        detections:detections, 
        replies:replies,
        reply:reply
    }

    return donejson
}
