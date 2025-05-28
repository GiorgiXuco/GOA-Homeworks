const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

const title = document.getElementById("title")
const content = document.getElementById("content")

const body = document.body

function update() {
    const currentTime = new Date()
    const newYearDate = new Date("January 01 2026 00:00:00")

    let interval = newYearDate - currentTime
    let daysInterval = Math.floor(interval / (1000 * 60 * 60 * 24))
    let hoursInterval = Math.floor(interval / (1000 * 60 * 60) % 24)
    let minutesInterval = Math.floor(interval / (1000 * 60) % 60)
    let secondsInterval = Math.floor((interval / 1000) % 60)

    days.textContent =String(daysInterval)
    hours.textContent =String(hoursInterval)
    minutes.textContent =String(minutesInterval)
    seconds.textContent =String(secondsInterval)



}

update()