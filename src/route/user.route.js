const { UserController } = require('../controller');
const { checkLogin, allowMemberType } = require('../middleware/auth');
const { MemberType } = require('../common/enum');

const userController = new UserController();

module.exports = [
  {
    method: 'post',
    route: '/api/user/login',
    middleware: [],
    action: userController.login,
  },
  {
    method: 'post',
    route: '/api/user/create',
    middleware: [checkLogin, allowMemberType([MemberType.MANAGER])],
    action: userController.createUser,
  },
  {
    method: 'get',
    route: '/api/user/me',
    middleware: [checkLogin],
    action: userController.getUserInfo,
  },
];
