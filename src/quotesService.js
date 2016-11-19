'use strict';

// Include required https library
var https = require('https');

/**
 * Quotes API
 */
var quotesService = (function () {
    
    var _API_HOST = "quotes.rest",
        _API_PORT = 80,
        _API_PATH = "/qod.json?category=inspire",
        _ERROR_MSG = "Sorry, I have nothing inspiring today.";
    
    /**
     * Invoke the REST API
     * @param callback - the callback function
     */
    var _invokeApi = function (callback) {
        var apiOptions = {
            hostname: _API_HOST,
            port: _API_PORT,
            path: _API_PATH
        };
        https.get(apiOptions, function (response) {
            var responseBody = '', 
                quoteData = {},
                quote = "";
            response.on('data', function (data) {
                responseBody += data;
            });
            response.on('end', function () {
                quoteData = JSON.parse(responseBody);
                if (response.statusCode == 200) {
                    quote = quoteData.contents.quotes[0].quote;
                    callback(quote);
                } else {
                    callback(_ERROR_MSG);
                }
            });
        }).on('error', function (e) {
            console.log("Error retrieving quote of the day from API: ", e);
            callback(_ERROR_MSG);
        });
    };

    /**
     * Get the array of countries based on a region
     * @param region - the region to find countries in
     * @param callback - the function to execute as callback
     */
    var getQuoteOfTheDay = function (callback) {
        _invokeApi(callback);
    };
    
    // Expose public functions
    return {
        getQuoteOfTheDay: getQuoteOfTheDay
    };
    
}) ();

module.exports = quotesService;