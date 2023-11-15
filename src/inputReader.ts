import * as process from "process"
import * as readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

export async function getTimeStr() {
    return getArgStr() || (await getSdinStr())
}

function getArgStr() {
    const args = process.argv.slice(2)
    return args.join(" ")
}

export function getSdinStr() {
    return new Promise<string>((resolve, _) => {
        rl.question("Enter time: ", (answer) => {
            resolve(answer)
        })
    })
}

export function close() {
    rl.close()
}
