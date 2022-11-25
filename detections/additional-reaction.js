module.exports = (msc, author) => {
    var detections = ['fuck me', '😭', 'bound']
    var reply = 'bruhh i broke again nawhh'

    if(msc.includes('fuck me')){
        reply = 'alr bet 🫢'
    } else if(msc.includes('😭')){
        reply = 'cry more nerd'
    } else if(msc.includes('bound')){
        reply = '2 falling in vloveee'
    }

    var donejson = {
        detections:detections, 
        reply:reply
    }

    return donejson
}