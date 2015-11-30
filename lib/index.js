/**
 * handling exports from lib
 */

module.exports = {
    init: require('./init'),                    // fetching json data
    test: require('./test'),                    // validating
    getJson : require('./getJsonUrl'),
    makeJsonFile : require('./makeJsonFile'),
    appBuilder: require('./builder'),
    render : require('./render'),
    logger : require('./logger')
};
