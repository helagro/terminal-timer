const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


async function getTimeStr(){
    return getArgStr() || await getSdinStr()
}

function getArgStr(){
    const args = process.argv.slice(2)
    return args.join(' ')
}

function getSdinStr(){
    return new Promise((resolve, _) => {
        rl.question('Enter time: ', (answer) => {
            resolve(answer)
        })
    })
}

function close(){
    rl.close()
}

module.exports = {
    getTimeStr, 
    getSdinStr,
    close
}