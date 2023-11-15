const HOUR = 3600
const MINUTE = 60

export function getSeconds(timeStr: string) {
    return hhmmss(timeStr) || hhmm(timeStr) || XhYmZs(timeStr) || minutes(timeStr)
}

function hhmmss(timeStr: string) {
    const matches = timeStr.match(/(\d{1,2}):(\d{1,2}):(\d{1,2})/)
    if (matches)
        return parseInt(matches[1]) * HOUR + parseInt(matches[2]) * MINUTE + parseInt(matches[3])
}

function hhmm(timeStr: string) {
    const matches = timeStr.match(/(\d{1,2}):(\d{1,2})/)
    if (matches) return parseInt(matches[1]) * HOUR + parseInt(matches[2]) * MINUTE
}

function minutes(timeStr: string) {
    const matches = timeStr.match(/^\d+$/)
    if (matches) return parseInt(matches[0]) * MINUTE
}

function XhYmZs(timeStr: string) {
    const hoursMatch = timeStr.match(/\d+(?=h)/)
    const minutesMatch = timeStr.match(/\d+(?=m)/)
    const secondsMatch = timeStr.match(/\d+(?=s)/)

    const hours = hoursMatch ? parseInt(hoursMatch[0]) : 0
    const minutes = minutesMatch ? parseInt(minutesMatch[0]) : 0
    const seconds = secondsMatch ? parseInt(secondsMatch[0]) : 0

    return hours * HOUR + minutes * MINUTE + seconds
}
