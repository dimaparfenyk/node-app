const fs = require("fs");
const mimeTypes = require("./mime_types");

module.exports = function staticFile(res, filePath, ext) {
  res.setHeader("Content-Type", mimeTypes[ext]);
  fs.readFile(`./public${filePath}`, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end();
    }
    res.end(data);
  });
};
