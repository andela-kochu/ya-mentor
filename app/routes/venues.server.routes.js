'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	venues = require('../../app/controllers/venues.server.controller');

module.exports = function(app) {
	// Article Routes
	app.route('/venues')
		.get(users.requiresLogin, venues.list)
		.post(users.requiresLogin, venues.create);

	// app.route('/venues/:meetingID')
	// 	.get(venues.read)

};
