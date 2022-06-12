/**
 * Title: Utilities
 * description: Utilities
 * Author: Abu Raihan
 * Data: 12-06-2022
 */

// Dependencies

// Module Scaffolding
const Utilities = {};

// parse JSON string to object
Utilities.parseJSON = (jsonString) => {
  let output;
  try {
    output = JSON.parse(jsonString);
  } catch {
    output = {};
  }
  return output;
};

// Export Module
module.exports = Utilities;
