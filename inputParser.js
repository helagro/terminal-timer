const HOUR = 3600
const MINUTE = 60

function getSeconds(timeStr){
    return (
        hhmmss(timeStr) ||
        hhmm(timeStr) ||
        XhYmZs(timeStr) ||
        minutes(timeStr)
    )
}


function hhmmss(timeStr){
    const matches = timeStr.match(/(\d{1,2}):(\d{1,2}):(\d{1,2})/)
    if(matches)
        return matches[1] * HOUR + matches[2] * MINUTE + parseInt(matches[3])
}

function hhmm(timeStr){
    const matches = timeStr.match(/(\d{1,2}):(\d{1,2})/)
    if(matches)
        return matches[1] * HOUR + matches[2] * MINUTE
}

function minutes(timeStr){
    const matches = timeStr.match(/^\d+$/)
    if(matches)
        return matches[0] * MINUTE
}

function XhYmZs(timeStr){
    const hours = timeStr.match(/\d+(?=h)/) || 0
    const minutes = timeStr.match(/\d+(?=m)/) || 0
    const seconds = timeStr.match(/\d+(?=s)/) || 0

    return hours * HOUR + minutes * MINUTE + parseInt(seconds)
}

module.exports = {getSeconds}