// dependency
const fs = require("fs");
const path = require("path");

// model scaffolding
const ilb = {};

// base directory of the data folder
lib.basedir = path.join(__dirname, "../.data/");

// write data to file
lib.create = function (dir, file, data, callback) {
  // open file for writing
  fs.open(
    `${lib.basedir + dir}+ /${file} + .json`,
    " wx",
    function (error, fileDescriptor) {
      if (!error && fileDescriptor) {
        // convert data to string
        const stringData = JSON.stringify(data);
        // write data to file and close it
        fs.writeFile(fileDescriptor, stringData, function (err) {
          if (!err) {
            fs.close(fileDescriptor, function (error) {
              if (!error) {
                callback(false);
              } else {
                callback(`Error closing the new file.`);
              }
            });
          } else {
            callback("Error waiting for new file");
          }
        });
      } else {
        callback("could not create new file it may already exists!");
      }
    }
  );
};

// Read data from file
lib.read = (dir, file, callback) => {
  fs.readFile(`${lib.basedir + dir}+ /${file} + .json`),
    "utf8",
    (err, data) => {
      callback(err, data);
    };
};

// update existing file
lib.update = (dir, file, data, callback) => {
  fs.open(
    `${lib.basedir + dir}+ /${file} + .json`,
    "r+",
    (err, fileDescriptor) => {
      if (!err && FileSystemEntry) {
        // convert data to file
        const stringData = JSON.stringify(data);

        //truncate the file
        fs.ftruncate(fileDescriptor, (err) => {
          if (!err) {
            fs.writeFile(fileDescriptor, stringData, (err) => {
              if (!err) {
                fs.close(fileDescriptor, (err) => {
                  if (!err) {
                    callback(false);
                  } else {
                    callback(`Error closing file`);
                  }
                });
              } else {
                callback(`Error writing the file.`);
              }
            });
          } else {
            callback("Error truncating file");
          }
        });
      } else {
        console.log(`File updating may not exists.`);
      }
    }
  );
};

// Delete existing file
lib.delete = (dir, file, callback) => {
  // Unlink the file
  fs.unlink(`${lib.basedir + dir}+ /${file} + .json`, (err) => {
    if (!err) {
      callback(false);
    } else {
      callback(`Error deleting file`);
    }
  });
};

// export module
module.exports = lib;
