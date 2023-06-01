const { exec } = require('child_process')
const readline = require('readline')


const MESSAGE = 'Time is up!'

function notify(){
    displayNotification()
    flashTerminal()
}

function displayNotification(){
    exec(`osascript -e 'display notification "${MESSAGE}" with title "Terminal Timer"'`) //Mac only
}

function flashTerminal(on = false, i = 60){

    if(on){
        process.stdout.write(MESSAGE);
        
        if(i < 0) return
    } else {
        readline.clearLine(process.stdout, 0);
        readline.cursorTo(process.stdout, 0);
    }

    setTimeout(() => flashTerminal(!on, --i), 60)
}

module.exports = {notify}