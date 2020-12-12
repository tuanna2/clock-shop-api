const deepFreeze = require('../utils/deepFreeze');

const Errors = {
  CommonError: {
    UNKNOWN_ERROR: {
      message: 'Đã có lỗi xảy ra, vui lòng thử lại sau.',
      errorCode: 500,
    },
    INVALID_INPUT_PARAMS: {
      message: 'Dữ liệu đầu vào không hợp lệ',
      errorCode: 500,
    },
  },
  AuthError: {
    USER_NOT_FOUND: {
      message: 'Không tìm thấy người dùng này.',
      errorCode: 500,
    },
    LOGIN_WRONG_PASSWORD: {
      message: 'Mật khẩu không chính xác, vui lòng kiểm tra lại.',
      code: 500,
    },
    USER_EXISTING: {
      message: 'Tên người dùng này đã tồn tại.',
      code: 500,
    },
    TOKEN_EXPIRED: {
      message: 'Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại.',
      errorCode: 500,
    },
    TOKEN_NOT_FOUND: {
      message: 'Không tìm thấy mã xác nhận.',
      errorCode: 500,
    },
    USER_NOT_PERMISSION: {
      message: 'Bạn không có quyền, vui lòng liên hệ với admin để nhận hỗ trợ.',
      errorCode: 500,
    },
    ACCOUNT_DELETE: {
      message: 'Tài khoản đã bị khóa, vui lòng liên hệ với admin để nhận hỗ trợ.',
      errorCode: 400,
    },
  },
};

deepFreeze(Errors);
module.exports = Errors;
