const multer = require('multer');

/**
 * @params {string} folderSave - folder save file
 * @params {number} maxSize - max size file by bytes
 */
const saveFileUpload = (folderSave, maxSize) => multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, folderSave);
    },
    filename(req, file, cb) {
      const uniqueSuffix = `${Date.now()}`;
      cb(null, `${uniqueSuffix}-${file.originalname}`);
    },
  }),
  limits: {
    fileSize: maxSize, // bytes
  },
});

module.exports = {
  saveFileUpload,
};
