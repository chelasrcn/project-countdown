(function() {

    'use strict'

    const divTitle   = document.querySelector('.countdown .title')
    const divNumbers = Array.from(document.querySelectorAll('.countdown .numbers'))

    document.addEventListener('DOMContentLoaded', () => {
        show()
        setInterval(show, 1000)
    })

    function show() {

        try {

            const response = updateCountdown()

            divNumbers.forEach((element, index) => {
                element.querySelector('span:nth-of-type(1)').textContent = response[index][0]
                element.querySelector('span:nth-of-type(2)').textContent = response[index][1]
            })

        } catch (error) {
            divTitle.textContent = error.message
        }

    }

    function updateCountdown() {

        let currentDate = new Date()
        let futureDate  = new Date("Nov 3, 2023")

        const diff = futureDate - currentDate

        if (diff < 0)
            throw new Error('Informe uma data válida!')

        let days    = Math.floor(diff / 1000 / 60 / 60 / 24)
        let hours   = Math.floor(diff / 1000 / 60 / 60) % 24
        let minutes = Math.floor(diff / 1000 / 60) % 60
        let seconds = Math.floor(diff / 1000) % 60

        days    = days    < 10 ? `0${days}`    : `${days}`
        hours   = hours   < 10 ? `0${hours}`   : `${hours}`
        minutes = minutes < 10 ? `0${minutes}` : `${minutes}`
        seconds = seconds < 10 ? `0${seconds}` : `${seconds}`

        return [days, hours, minutes, seconds]

    }

})()