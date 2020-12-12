/**
 * @params {object} object - object want to freeze
 */
const deepFreeze = (object) => {
  const propNames = Object.getOwnPropertyNames(object);
  propNames.forEach((name) => {
    const value = object[name];
    if (value && typeof value === 'object') {
      deepFreeze(value);
    }
  });
  return Object.freeze(object);
};

module.exports = deepFreeze;
