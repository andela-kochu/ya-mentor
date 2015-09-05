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
		.put(users.requiresLogin, learners.checkPermission, learners.update)
		.delete(users.requiresLogin, learners.checkPermission, learners.delete);

	app.route('/learners/:learnerId/requests')
		.get(users.requiresLogin, learners.checkPermission, learners.getRequests);

	app.route('/learners/:learnerId/mentors')
		.get(users.requiresLogin, learners.checkPermission, learners.listMentors);

	// Finish by binding the article middleware
	app.param('learnerId', learners.learnerByID);
};
