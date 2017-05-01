'use strict';

var whoamiHandler = require(process.cwd() + '/app/controllers/whoamiHandler.js');

module.exports = function (app) {
    app.route('/api/whoami/').get(whoamiHandler)
};
