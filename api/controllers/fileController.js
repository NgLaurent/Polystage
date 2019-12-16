var formidable = require('formidable');
var fs = require('fs');
const path = require('path');
// Constants
var current_dir = path.join(__dirname, '../../');
const DIR_UPLOADS = current_dir + "public/";

exports.uploadFile= function(req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        fs.copyFile(files.filetoupload.path, DIR_UPLOADS + files.filetoupload.name, (err) => {
          if (err) throw err;
          res.status(200).send(DIR_UPLOADS + files.filetoupload.name);
        });
        fs.unlink(files.filetoupload.path, (err) => {
          if (err) {
            console.error(err)
            return
          }
        })
    })
  }
