'use strict';

/**
 * App ID for the skill
 */
var APP_ID = undefined;

// Include required depedencies
var AlexaSkill = require('./AlexaSkill'),
    intentHelper = require('./intentHelper'),
    eventHelper = require('./eventHelper');

/**
 * InspireMe is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var InspireMe = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
InspireMe.prototype = Object.create(AlexaSkill.prototype);
InspireMe.prototype.constructor = InspireMe;


// Register the event and intent handlers
eventHelper.registerHandlers(InspireMe.prototype.eventHandlers);
intentHelper.registerHandlers(InspireMe.prototype.intentHandlers);

module.exports = InspireMe;