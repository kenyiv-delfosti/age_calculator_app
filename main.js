const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')
const arrow = document.getElementById('arrow')

const errorMessageDay = document.getElementById('error_message_day')
const errorMessageMonth = document.getElementById('error_message_month')
const errorMessageYear = document.getElementById('error_message_year')

const yearOutput = document.getElementById('output_year')
const monthOutput = document.getElementById('output_month')
const dayOutput = document.getElementById('output_day')



const dataDate = new Date()

day.addEventListener('input', () => {
    focusNext();
})

month.addEventListener('input', () => {
    focusNext();
})


arrow.addEventListener('click', (e) => {
    errorMessageDay.innerText = ''
    errorMessageMonth.innerText = ''
    errorMessageYear.innerText = ''
    if (day.value == '' || month.value == '' || year.value == '') {
        e.preventDefault()
        if (day.value == '') {
            errorMessageDay.innerText = 'this field is required'
        }
        if (month.value == '') {
            errorMessageMonth.innerText = 'this field is required'
        }
        if (year.value == '') {
            errorMessageYear.innerText = 'this field is required'
        }

    } else if (year.value > dataDate.getFullYear()) {
        e.preventDefault()
        errorMessageYear.innerText = "Must be in the past"
        year.value = ''
    } else if (month.value > 12) {
        e.preventDefault()
        errorMessageMonth.innerText = 'Must be a valid Month'
        month.value = ''
    } else if (day.value > 31) {
        e.preventDefault()
        errorMessageDay.innerText = 'must be a valid Day'
        day.value = ''
    } else {
        calculateDate(year.value, month.value, day.value)
    }
})

function calculateDate(year, month, day) {

    if (month > (dataDate.getMonth() + 1)) {
        yearOutput.textContent = dataDate.getFullYear() - year - 1
    } else if (month == (dataDate.getMonth() + 1) && day > dataDate.getDate()) {
        yearOutput.textContent = dataDate.getFullYear() - year - 1
    } else {
        yearOutput.textContent = dataDate.getFullYear() - year
    }

    if (month > (dataDate.getMonth() + 1)) {
        monthOutput.textContent = 12 + ((dataDate.getMonth() + 1) - month)
    } else {
        monthOutput.textContent = (dataDate.getMonth() + 1) - month
    }

    if (day > dataDate.getDate() && month % 2 !== 0 || (dataDate.getMonth() + 1) == 8) {
        dayOutput.textContent = 31 - (day - dataDate.getDate())
    } else if (day < dataDate.getDate() && month % 2 !== 0 || (dataDate.getMonth() + 1) == 8) {
        dayOutput.textContent = 31 + (day - dataDate.getDate())
    } else if (day > dataDate.getDate() && month % 2 == 0 && (dataDate.getMonth() + 1) !== 8) {
        dayOutput.textContent = 30 - (day - dataDate.getDate())
    } else if (day < dataDate.getDate() && month % 2 == 0 && (dataDate.getMonth() + 1) !== 8) {
        dayOutput.textContent = -(day - dataDate.getDate())
    }
}

function focusNext() {
    if (day.value.length === day.maxLength) {
        month.focus();
    }

    if (month.value.length === month.maxLength) {
        year.focus();
    }
}