'use strict';


var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Venue = mongoose.model('Venue'),
	// Request = mongoose.model('Request'),
	_ = require('lodash');


exports.create = function(req, res) {
	var venue = new Venue(req.body);
	// venue.push()
	venue.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(venue);
		}
	});
};



exports.list = function(req, res) {
	Venue.find().sort('-created').exec(function(err, venue) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(venue);
		}
	});
};




exports.read = function(req, res) {
	res.json(req.meeting);
};

// exports.meetingByID = function(req, res, next, id) {
// 	Meeting.findById(id).exec(function(err, meeting) {
// 		if (err) return next(err);
// 		if (!meeting) return next(new Error('Failed to find meeting ' + id));
// 		req.users = users;
// 		next();
// 	});
// };
//
// exports.update = function(req, res) {
// 	var meeting = req.meeting;
//
// 	meeting = _.extend(meeting, req.body);
//
// 	meeting.save(function(err) {
// 		if (err) {
// 			return res.status(400).send({
// 				message: errorHandler.getErrorMessage(err)
// 			});
// 		} else {
// 			res.json(meeting);
// 		}
// 	});
// };
//
// exports.checkPermission = function(req, res, next) {
// 	if(req.users.indexOf(req.user.id)!=-1){
// 		next();
// 	}else{
// 		res.send(403, {message: 'Unauthorized'});
// 	}
// };
//
// exports.delete = function(req, res) {
// 	var meeting = req.meeting;
//
// 	meeting.remove(function(err) {
// 		if (err) {
// 			return res.status(400).send({
// 				message: errorHandler.getErrorMessage(err)
// 			});
// 		} else {
// 			res.json(meeting);
// 		}
// 	});
// };
