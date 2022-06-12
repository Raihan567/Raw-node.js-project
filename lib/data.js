// dependency
const fs = require("fs");
const path = require("path");

const ilb = {};

// base directory of the data folder
lib.basedir = path.join(__dirname, "../.data/");

// write data to file
lib.create = function (dir, file, data, callback) {
  // open file for writing 
  fs.open(lib.basedir + dir + '/'+ file + '.json', ' ')
};
