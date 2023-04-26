const moment = require('moment');

class MomentService {
  constructor() {
    moment.locale('en'); // Set default locale to English
  }

  formatDate(date, format) {
    if (!date) {
      throw new Error('Date is required');
    }
    return moment(date).format(format || 'MMM DD, YYYY');
  }

  formatTime(time, format) {
    if (!time) {
      throw new Error('Time is required');
    }
    return moment(time, 'HH:mm').format(format || 'h:mm A');
  }

  addDays(date, days) {
    if (!date) {
      throw new Error('Date is required');
    }
    return moment(date).add(days, 'days').toDate();
  }

  subtractDays(date, days) {
    if (!date) {
      throw new Error('Date is required');
    }
    return moment(date).subtract(days, 'days').toDate();
  }

  isBefore(date1, date2) {
    if (!date1 || !date2) {
      throw new Error('Both dates are required');
    }
    return moment(date1).isBefore(date2);
  }

  isAfter(date1, date2) {
    if (!date1 || !date2) {
      throw new Error('Both dates are required');
    }
    return moment(date1).isAfter(date2);
  }

  isEqual(date1, date2) {
    if (!date1 || !date2) {
      throw new Error('Both dates are required');
    }
    return moment(date1).isSame(date2);
  }

  differenceInDays(date1, date2) {
    if (!date1 || !date2) {
      throw new Error('Both dates are required');
    }
    return moment(date1).diff(date2, 'days');
  }
}

module.exports = MomentService;
