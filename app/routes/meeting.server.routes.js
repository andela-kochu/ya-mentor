'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	meetings = require('../../app/controllers/meetings.server.controller');

module.exports = function(app) {
	app.route('/meetings')
		.get(users.requiresLogin, meetings.listMyMeetings)
		.post(users.requiresLogin, meetings.create);

	app.route('/meetings/:meetingId')
		.get(meetings.read)
		.put(users.requiresLogin, meetings.update)
		.delete(users.requiresLogin, meetings.delete);



	//
	// // Finish by binding the article middleware
	app.param('meetingId', meetings.meetingByID);
};
