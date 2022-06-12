/**
 * Title: Route
 * Description: Application routes setup
 * Author: Abu Raihan
 * Date: 11-06-2022
 */

const { sampleHandler } = require("./handlers/routeHandlers/sampleHandlers");
const {} = require("./handlers/routeHandlers/userHandler");

// Route setup
const routes = {
  sample: sampleHandler,
  user: userHandler,
};

// Exports module
module.exports = routes;
