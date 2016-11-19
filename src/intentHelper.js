'use strict';

// Include required dependencies
var restCountries = require('./restCountries'),
    helper = require('./helper'),
    responseHelper = require('./responseHelper');

/**
 * Intent helper for WorldCountries
 */
var intentHelper = (function () {

    /**
     * Inspire a user
     * @param intent - the intent
     * @param session - the intent session
     * @param response - the response to add welcome to
     */
    var _inspireMeIntent = function (intent, session, response) {
        var quote = quotesService.getQuoteOfTheDay(function (quote) {
            responseHelper.handleInspireMe(quote, response);
        });
    };
    
    /**
     * Register intent handlers
     * @param intentHandlers - the WorldCountries intent handlers
     */
    var registerHandlers = function (intentHandlers) {
        intentHandlers["InspireMeIntent"] = _inspireMeIntent;
        intentHandlers["AMAZON.HelpIntent"] = function (intent, session, response) {
            responseHelper.handleHelp(response);
        };
        intentHandlers["AMAZON.StopIntent"] = function (intent, session, response) {
            responseHelper.handleExit(response);
        };
        intentHandlers["AMAZON.CancelIntent"] = function (intent, session, response) {
            responseHelper.handleExit(response);
        };
    };
    
    // Expose public functions
    return {
        registerHandlers: registerHandlers
    };
    
}) ();

module.exports = intentHelper;
