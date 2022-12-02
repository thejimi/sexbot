module.exports = async (message, author) => {
    var msc = message.toLowerCase()

    var compliment = require('./detections/compliment.js')
    var insult = require('./detections/insult.js')
    var neutral = require('./detections/neutral.js')
    var questionyon = require('./detections/question-yon.js')
    var or = require('./detections/or.js')
    var additionalreaction = require('./detections/additional-reaction.js')

    var final;

    //look for compliments
    compliment(msc).detections.some(element => {
        if (msc.includes(element)) {
            final = compliment(msc, author).reply
            return;
        }
    });

    //look for insults
    insult(msc).detections.some(element => {
        if (msc.includes(element)) {
            final = insult(msc, element, author).reply
            return;
        }
    });

    //look for a yes or no question
    questionyon(msc).detections.some(element => {
        if (msc.includes(element)) {
            final = questionyon(msc, author).reply
            return;
        }
    });

    or(msc).detections.some(element => {
        if (msc.includes(element)) {
            final = or(msc, author).reply
            return;
        }
    });

    additionalreaction(msc).detections.some(element => {
        if (msc.includes(element)) {
            final = additionalreaction(msc, author).reply
            return;
        }
    });

    if(!final){
        final = neutral(msc, author).reply
    }

    return final;
}