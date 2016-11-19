'use strict';

/**
 * Response helper for InspireMe
 */
var responseHelper = (function () {
    
    /**
     * Handle the welcome
     * @param response - the intent response
     */
    var handleWelcome = function (response) {
        var cardTitle = "Inspire Me"";
        var speechOutput = "Welcome to Inspire Me!  Would you like to hear an inspirational quote?";
        var repromptOutput = "With Inspire Me, you can hear an inspirational quote";
        var cardOutput = "Inspire Me. Would you like to hear an inspirational quote?";
        response.askWithCard(speechOutput, repromptOutput, cardTitle, cardOutput);
    };
    
    /**
     * Handle the "InspireMe" response
     * @param quote - the quote
     * @param countries - the countries in the region
     * @param response - the intent response
     */
    var handleInspireMe = function (quote, response) {
        var cardTitle = "Your Inspirational Quote";
        response.tellWithCard(quote, cardTitle, quote);
    };
    
    /**
     * Handle a help intent
     * @param response - the response to add welcome to
     */
    var handleHelp = function (response) {
        var helpQuestion = "You can say inspire me or you can say exit... What can I help you with?";
        response.ask(helpQuestion, "What can I help you with?");
    };
    
    /**
     * Handle exit request
     * @param response - the response to add error output to
     */
    var handleExit  = function (response) {
        response.tell("Thanks for using Inspire Me, goodbye");
    };
    
    // Expose public functions
    return {
        handleWelcome: handleWelcome,
        handleInspireMe: handleInspireMe,
        handleHelp: handleHelp,
        handleExit: handleExit
    };
    
}) ();

module.exports = responseHelper;