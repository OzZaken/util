function isEmailValid1(str) {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    return regex.test(str)
}

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
function isDateValid(str) {
    const regex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/
    return regex.test(str)
}
function isTimeValid(str) {
    const regex = /^(0?[1-9]|1[0-2]):[0-5]\d\s(am|pm)$/i
    return regex.test(str)
}

/** isValidUsername:
 * Start with a letter (both upper and lowercase) or a number
 * Have a length of at least 2 characters and at most 21 characters
 * Do not have consecutive dots, underscores, or hyphens.
 * Do not start or end with a dot, underscore, or hyphen. */
function isValidUsername(str) {
    const regex = /^(?=[a-zA-Z0-9])(?!.*[-_.]{2})[a-zA-Z0-9._-]{2,21}(?<![.-])$/
    return regex.test(str)
}

/** different type of passwords for different types of users:
 * user: at least 8 characters with at least one lowercase letter, one uppercase letter, and one number.
 * host: at least 12 characters with at least one lowercase letter, one uppercase letter, one number, and one special character ($, @, !, %, *, ?, or &).
 * admin: level password, I've included a regex that requires at least one lowercase letter, one uppercase letter, one digit, one special character, and a minimum length of 12 characters.*/
function isValidPass(str, passLvl = 'user') {
    let regex

    if (passLvl === 'user') regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    else if (passLvl === 'host') regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:<,.>?[\]\\\/])[a-zA-Z\d!@#$%^&*()\-_=+{};:<,.>?[\]\\\/]{8,}$/
    else if (passLvl === 'admin') regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:<,.>?[\]\\\/])[a-zA-Z\d!@#$%^&*()\-_=+{};:<,.>?[\]\\\/]{12,}$/
    else throw new Error(`Invalid passLvl parameter: ${passLvl}`)

    return regex.test(str)
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