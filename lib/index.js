/**
 * handling exports from lib
 */

module.exports = {
    init: require('./init'),            // fetching json data
    test: require('./test'),            // validating
    // exportResume: require('./export'),   // exportResume with format
    getJson: require('./getJson')
};