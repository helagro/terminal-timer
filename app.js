const inputReader = require('./inputReader.js')
const inputParser = require('./inputParser.js')
const timePrinter = require('./timePrinter.js')
const userNotifier = require('./userNotifier.js')


async function main() {
    let timeStr = await inputReader.getTimeStr()
    let seconds = inputParser.getSeconds(timeStr)

    while(!seconds){
        timeStr = await inputReader.getSdinStr()
        seconds = inputParser.getSeconds(timeStr)
    }

    run(seconds)
    inputReader.close()
}


function run(seconds){
    let i = 0
    const interval = setInterval(() => {
        i++

        if(i > seconds){
            clearInterval(interval)
            userNotifier.notify()
        }
        else{
            timePrinter.printTime(seconds - i)
        }
    }, 1000)
}
    


main()