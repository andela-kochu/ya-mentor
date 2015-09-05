'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	learners = require('../../app/controllers/learners.server.controller');

module.exports = function(app) {
	// Article Routes
	app.route('/learners')
		.get(learners.list)
		.post(users.requiresLogin, learners.create);

	app.route('/learners/:learnerId')
		.get(learners.read)
		.put(users.requiresLogin, learners.hasAuthorization, learners.update)
		.delete(users.requiresLogin, learners.hasAuthorization, learners.delete);

	app.route('/learners/:id/requests')
		.get(users.requiresLogin, learners.hasAuthorization, learners.getRequests);

	app.route('/learners/:id/mentors')
		.get(users.requiresLogin, learners.hasAuthorization, learners.listMentors);

	// Finish by binding the article middleware
	app.param('learnerId', learners.learnerByID);
};