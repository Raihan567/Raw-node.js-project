/**
 * Title: Uptime monitoring Application
 * Description: A RESTful API to monitor up or down time of user defined link
 * Author: Abu Raihan
 * Date: 11-06-2022
 */

// Dependencies
const http = require("http");
// const { parse } = require("path");
const { handleReqRes } = require("./helpers/handleReqRes");

// app object -model scaffolding
const app = {};

// configuration
app.config = {
  port: 3000,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`Listing to port no ${app.config.port}`);
  });
};

// handle request response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
