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
  const acceptedMethod = ['get', 'post', 'put', 'delete']
  if(acceptedMethod.indexOf(requestProperties.method) > -1){
    handler._user[requestProperties.method](requestProperties, callback)
  }else{
    callback(200, {
      message: "this is a user url",
    });
  }
  
};

handler._user= {}

handler._user.post = (requestProperties, callback) =>{
  
}
handler._user.get = (requestProperties, callback) =>{
  callback(200)
}
handler._user.put = (requestProperties, callback) =>{

}
handler._user.delete = (requestProperties, callback) =>{

}

// Exports module
module.exports = routes;
