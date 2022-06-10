/**
 * Title: Not found handlers
 * Description: Not found Handlers
 * Author: Abu Raihan
 * Date: 11-06-2022
 */
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  callback(404, {
    message: "Your requested url is not found!",
  });
};

module.exports = handler;
