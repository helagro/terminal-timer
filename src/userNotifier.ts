import { exec } from "child_process"
import readline from "readline"
import sound from "play-sound"
import * as process from "process"

const player = sound()
const MESSAGE = "Time is up!"

export function notify() {
    displayNotification()
    flashTerminal()
    playSound()
}

function displayNotification() {
    exec(`osascript -e 'display notification "${MESSAGE}" with title "Terminal Timer"'`) //Mac only
}

function flashTerminal(on = false, i = 60) {
    if (on) {
        process.stdout.write(MESSAGE)

        if (i < 0) return
    } else {
        readline.clearLine(process.stdout, 0)
        readline.cursorTo(process.stdout, 0)
    }

    setTimeout(() => flashTerminal(!on, --i), 60)
}

function playSound() {
    player.play("funk.mp3", function (err) {
        if (err) throw err
    })
}
