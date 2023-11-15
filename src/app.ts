import * as timePrinter from './timePrinter'
import * as userNotifier from './userNotifier'
import { getSeconds } from './inputParser'
import * as inputReader from './inputReader'

async function main() {
    let timeStr = await inputReader.getTimeStr()
    let seconds = getSeconds(timeStr)

    while (!seconds) {
        timeStr = await inputReader.getSdinStr()
        seconds = getSeconds(timeStr)
    }

    run(seconds)
    inputReader.close()
}

function run(seconds: number) {
    let i = 0
    const interval = setInterval(() => {
        i++

        if (i > seconds) {
            clearInterval(interval)
            userNotifier.notify()
        } else {
            timePrinter.printTime(seconds - i)
        }
    }, 1000)
}

main()
