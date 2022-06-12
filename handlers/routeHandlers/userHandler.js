/**
 * Title: User handler
 * Description: Route setup for user handler
 * Author: Abu Raihan
 * Date: 12-06-2022
 */
// model scaffolding
const handler = {};

// Route setup
handler.userHandler = (requestProperties, callback) => {
  const acceptedMethod = ["get", "post", "put", "delete"];
  if (acceptedMethod.indexOf(requestProperties.method) > -1) {
    handler._user[requestProperties.method](requestProperties, callback);
  } else {
    callback(200, {
      message: "this is a user url",
    });
  }
};

handler._user = {};

handler._user.post = (requestProperties, callback) => {
  const firstName =
    typeof requestProperties.body.firstName === "string" &&
    requestProperties.body.firstName.trim().length > 0
      ? requestProperties.body.firstName
      : false;

  const lastName =
    typeof requestProperties.body.lastName === "string" &&
    requestProperties.body.lastName.trim().length > 0
      ? requestProperties.body.lastName
      : false;

  const phone =
    typeof requestProperties.body.phone === "string" &&
    requestProperties.body.phone.trim().length === 11
      ? requestProperties.body.phone
      : false;
      
  const password =
    typeof requestProperties.body.password === "string" &&
    requestProperties.body.password.trim().length > 0
      ? requestProperties.body.password
      : false;
  const tosAgreement =
    typeof requestProperties.body.tosAgreement === "string" &&
    requestProperties.body.tosAgreement.trim().length > 0
      ? requestProperties.body.tosAgreement
      : false;
      if( firstName, lastName, phone, password, tosAgreement){

      }else{
        callback(400, {
          error: 'You have a problem in your request'
        })
      }

};
handler._user.get = (requestProperties, callback) => {
  callback(200);
};
handler._user.put = (requestProperties, callback) => {};
handler._user.delete = (requestProperties, callback) => {};

// Exports module
module.exports = routes;
