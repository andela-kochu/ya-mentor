'use strict';


var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Notif = mongoose.model('Notification'),
	Request = mongoose.model('Request'),
	_ = require('lodash');



exports.list = function(req, res) {
	Notif.find().where({user: req.user.id}).exec(function(err, notif) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(notif);
		}
	});
};

exports.update = function(req, res) {
	var notif = req.notif;

	notif = _.extend(notif, req.body);

	notif.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(notif);
		}
	});
};

exports.findById = function(req, res, next, id) {
	Notif.findById(id).exec(function(err, notif) {
		if (err) return next(err);
		if (!notif) return next(new Error('Failed to find notification ' + id));
		req.notif = notif;
		next();
	});
};

exports.create = function(user, text, status){
	var note = new Notif({user: user, text: text, status: status});
	note.save();
};
