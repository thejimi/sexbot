module.exports = (msc, author) => {
    var detections = [" or "]

    var msc2 = msc.replace(/<@1014633027319648277>/g, '')

    var arr = msc2.split(" or ")
    var choose = Math.floor(Math.random() * 2);

    var reply = arr[choose]
    var donejson = {
        detections:detections, 
        reply:reply
    }

    return donejson
}