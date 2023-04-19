/* human-readable string that represents the time difference in terms of:
  years, months, weeks, days, hours, minutes, or seconds 
  (depending on the largest time range that the difference fits into).
  examples: if the function is called on March 26, 2023 at 10:30:00 AM UTC, the output could be:
  "in 1 year" if the ms parameter is set to March 26, 2024 at 10:30:00 AM UTC.
  "1 year ago" if the ms parameter is set to March 26, 2022 at 10:30:00 AM UTC.
  "in 6 months" if the ms parameter is set to September 26, 2023 at 10:30:00 AM UTC.
  "6 months ago", "in 2 weeks", "2 weeks ago" etc.*/
function timeAgo(ms = new Date()) {
    const date = ms instanceof Date ? ms : new Date(ms)
    const formatter = new Intl.RelativeTimeFormat('en')

    const ranges = {
        years: 3600 * 24 * 365,
        months: 3600 * 24 * 30,
        weeks: 3600 * 24 * 7,
        days: 3600 * 24,
        hours: 3600,
        minutes: 60,
        seconds: 1,
    }
    // calculates the time difference between the ms parameter and the current date.
    const secondsElapsed = (date.getTime() - Date.now()) / 1000


    for (let key in ranges) {
        if (ranges[key] < Math.abs(secondsElapsed)) {
            const delta = secondsElapsed / ranges[key]
            let time = formatter.format(Math.round(delta), key)
            if (time.includes('in')) {
                time = time.replace('in ', '')
                time = time.replace('ago', '')
                time += ' ago'
            }
            return time
        }
    }
}

// YYYY-MM-DD format.
function getFormatDate(millisecond) {
    const valueDate = new Date(millisecond)
    return `${valueDate.getFullYear()}-${(valueDate.getMonth() + 1 + '').padStart(2, '0')}-${(valueDate.getDate() + '').padStart(2, '0')}`
}

// HH:MM format.
function getFormatTime(millisecond) {
    const valueTime = new Date(millisecond)
    return `${(valueTime.getHours() + '').padStart(2, '0')}:${(valueTime.getMinutes() + '').padStart(2, '0')}`
}