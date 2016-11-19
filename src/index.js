'use strict';

// Include InspireMe
var InspireMe = require("./inspireMe");

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the WorldCountries skill.
    var inspireMe = new InspireMe();
    inspireMe.execute(event, context);
};