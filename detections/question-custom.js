module.exports = (msc, author) => {
    var detections = ["?"]
    var replies = [`uncle google here: https://www.google.com/search?q=${msc.replace(/@/g, "noping")}`, `grandpa yahoo here: https://search.yahoo.com/search?p=${msc.replace(/@/g, "noping")}`, `mr wikipedia here: https://en.wikipedia.org/wiki/${msc.replace(/@/g, "noping")}`]
    var reply = replies[Math.floor(Math.random() * replies.length)]
    var donejson = {
        detections:detections, 
        replies:replies,
        reply:reply
    }

    return donejson
}