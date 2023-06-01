const readline = require('readline')

const HOUR = 3600
const MINUTE = 60


function printTime(seconds){
    const minutes = Math.floor((seconds % HOUR) / MINUTE)
    const secs = seconds % MINUTE

    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0);

    const hoursStr = getHoursStr(seconds)

    process.stdout.write(`${hoursStr}${pad(minutes)}:${pad(secs)}`);
}

function getHoursStr(seconds){
    if(seconds < HOUR) return ""
    const hours = Math.floor(seconds / HOUR)

    return pad(hours) + ":"
}


function pad(num){
    return num.toString().padStart(2, '0')
}


module.exports = {printTime}