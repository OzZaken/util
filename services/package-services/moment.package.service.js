import moment from 'moment-timezone';

/** Parse a date string into a Moment.js object, using the specified format and time zone.
 * If the date string cannot be parsed, return null.
 */
export function parseDate(dateString, format, timeZone) {
    const momentObj = moment.tz(dateString, format, timeZone);
    return momentObj.isValid() ? momentObj : null;
}

// Format a Moment.js object as a date string, using the specified format and time zone.
export function formatDate(momentObj, format, timeZone) {
    return momentObj.clone().tz(timeZone).format(format);
}

// Calculate the difference between two Moment.js objects, in the specified units.
export function diffDates(momentObj1, momentObj2, units) {
    return momentObj1.diff(momentObj2, units);
}

// Add or subtract a specified amount of time to a Moment.js object, in the specified units.
export function addTime(momentObj, amount, units) {
    return momentObj.clone().add(amount, units);
}

// Set a Moment.js object to the `start` of a specified unit (day, month, year, etc.)
export function startOf(momentObj, unit) {
    return momentObj.clone().startOf(unit);
}

//  Set a Moment.js object to the `end` of a specified unit (day, month, year, etc.)
export function endOf(momentObj, unit) {
    return momentObj.clone().endOf(unit);
}

function getFormattedDateTime(dateTimeString, format) {
    const dateTime = moment(dateTimeString);
    return dateTime.format(format);
}

function convertToTimezone(dateTimeString, timezone) {
    const dateTime = moment(dateTimeString);
    return dateTime.tz(timezone).format();
}

function getRelativeTime(dateTimeString) {
    const dateTime = moment(dateTimeString);
    return dateTime.fromNow();
}

function getDuration(startDateTimeString, endDateTimeString, unit) {
    const startDateTime = moment(startDateTimeString);
    const endDateTime = moment(endDateTimeString);
    return moment.duration(endDateTime.diff(startDateTime)).as(unit);
}

function getDateRange(startDate, endDate, format) {
    const dates = [];
    let currentDate = moment(startDate);
    while (currentDate <= moment(endDate)) {
        dates.push(currentDate.format(format));
        currentDate = currentDate.clone().add(1, 'd');
    }
    return dates;
}

function setLocale(locale) {
    moment.locale(locale);
}

function isValidDateTime(dateTimeString, format) {
    return moment(dateTimeString, format, true).isValid();
}