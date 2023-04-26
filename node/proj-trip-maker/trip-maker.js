const inquirer = require('inquirer')
const countryService = require('./services/country.service')
const tripService = require('./services/trip.service')
let interval = null

buildTrip()

function buildTrip(countryCode = null) {
    const countries = countryService.query(countryCode)
    const choices = countries.map(country => ({ name: country.name, value: country }))
    const from = (countryCode) ? ` from ${countryCode}` : ''
    const questions = [
        {
            type: 'rawlist',
            name: 'country',
            message: `Where do you wanna go${from}?`,
            choices
        }
    ]
    inquirer.prompt(questions)
        .then(({ country }) => {
            const done = tripService.addToTrip(country)
            if (done) return
            runLoader()
            setTimeout(() => {
                clearInterval(interval)
                interval = null
                buildTrip(country.code)
            }, 3000)
        })
}

function runLoader() {
    console.log('.')
    interval = setInterval(() => {
        console.log('.')
    }, 1000)
}