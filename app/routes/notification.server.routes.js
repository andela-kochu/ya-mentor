'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	notif = require('../../app/controllers/notification.server.controller');

module.exports = function(app) {
	// Article Routes
	app.route('/notification')
		.get(users.requiresLogin,notif.list);

	app.route('/notification/:notifId')
		.put(users.requiresLogin,notif.findById);
	//
	//
	app.param('notifId', notif.findById);
};
