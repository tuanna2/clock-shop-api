const deepFreeze = require('../utils/deepFreeze');

const Enums = {
  MemberType: {
    MANAGER: 1,
    SALER: 2,
  },
};

deepFreeze(Enums);
module.exports = Enums;
