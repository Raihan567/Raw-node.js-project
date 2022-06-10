/**
 * Title: Route
 * Description: Application routes setup
 * Author: Abu Raihan
 * Date: 11-06-2022
 */

const { notFoundHandler } = require("./handlers/routeHandlers/notFoundHandler");
const { sampleHandler } = require("./handlers/routeHandlers/sampleHandlers");

const routes = {
  sample: sampleHandler,
};

module.exports = routes;
