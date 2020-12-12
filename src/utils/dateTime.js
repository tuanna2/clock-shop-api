const moment = require('moment-timezone');

const getDayOfMonth = (year, month) => {
  const startDate = moment([year, month - 1]).format('YYYY-MM-DD');
  const endDate = moment(startDate).endOf('month').format('YYYY-MM-DD HH:mm:ss');
  return { startDate, endDate };
};

module.exports = {
  getDayOfMonth,
};
