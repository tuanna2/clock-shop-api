const success = (data, totalRow, message, metaData) => {
  if (data.data) {
    totalRow = data.totalRow || totalRow;
    metaData = data.metaData ? data.metaData : metaData;
    data = data.data;
  }
  return {
    success: true,
    errorCode: 0,
    message: message || '',
    data,
    totalRow: totalRow || 0,
    metaData,
  };
};
const error = ({ message, errorCode, metaData }) => ({
  success: false,
  errorCode: errorCode || 500,
  data: null,
  message,
  totalRow: 0,
  metaData,
});
module.exports = {
  success, error,
};
