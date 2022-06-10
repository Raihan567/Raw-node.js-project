/**
 * Title: Sample handlers
 * Description: Sample Handlers
 * Author: Abu Raihan
 * Date: 11-06-2022
 */
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  console.log(requestProperties);

  callback(200, {
    message: "this is a sample url ",
  });
};

module.exports = handler;
