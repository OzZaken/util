export function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

export function isPhoneNumberValid(phoneNumber) {
    const phoneRegex = /^\+?[0-9]{10,14}$/
    return phoneRegex.test(phoneNumber)
}

export function isPasswordValid(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return passwordRegex.test(password)
}

export function isCreditCardValid(creditCardNumber) {
    const creditCardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
    return creditCardRegex.test(creditCardNumber)
}

export function isZipCodeValid(zipCode) {
    const zipCodeRegex = /^\d{5}(?:[-\s]\d{4})?$/
    return zipCodeRegex.test(zipCode)
}

// ---------------------------------   Tests   ---------------------------------  

const email = 'john.doe@example.com'
const isEmailValid = isEmailValid(email)
console.log(isEmailValid) // true

const phoneNumber = '+1 (555) 123-4567'
const isPhoneNumberValid = isPhoneNumberValid(phoneNumber)
console.log(isPhoneNumberValid) // true

const password = 'Password123!'
const isPasswordValid = isPasswordValid(password)
console.log(isPasswordValid) // true

const creditCardNumber = '4111111111111111'
const isCreditCardValid = isCreditCardValid(creditCardNumber)
console.log(isCreditCardValid) // true

const zipCode = '12345'
const isZipCodeValid = isZipCodeValid(zipCode)
console.log(isZipCodeValid) // true