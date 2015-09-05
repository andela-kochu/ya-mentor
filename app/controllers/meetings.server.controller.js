'use strict';


var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Venue = mongoose.model('Venue'),
	Meeting = mongoose.model('Meeting'),
	// Request = mongoose.model('Request'),
	_ = require('lodash');


exports.create = function(req, res) {
	var meeting = new Meeting(req.body);
	meeting.users.push(req.user);
	meeting.status = 0

	meeting.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(meeting);
		}
	});
};



exports.listMyMeetings = function(req, res) {
	Meeting.find({users: req.user.id}).populate('users').sort('-created').exec(function(err, meeting) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(meeting);
		}
	});
};

exports.list = function(req, res) {
	Meeting.find().populate('users').sort('-created').exec(function(err, meeting) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(meeting);
		}
	});
};

exports.listMyMeetingRequests = function(req, res) {
	Meeting.find({users: req.user.id}).populate('users').sort('-created').exec(function(err, meeting) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			console.log(2)
			res.json(meeting);
		}
	});
};

// exports.listMeetingByLocation = function(req, res, id) {
// 	Meeting.find({venue: id}).populate('users').sort('-created').exec(function(err, meeting) {
// 		if (err) {
// 			console.log(err)
// 			return res.status(400).send({
// 				message: errorHandler.getErrorMessage(err)
// 			});
// 		} else {
// 			res.json(meeting);
// 		}
// 	});
// };


exports.read = function(req, res) {
	res.json(req.meeting);
};

exports.meetingByID = function(req, res, next, id) {
	Meeting.findById(id).exec(function(err, meeting) {
		if (err) return next(err);
		if (!meeting) return next(new Error('Failed to find meeting ' + id));
		req.meeting = meeting;
		next();
	});
};

exports.update = function(req, res) {
	var meeting = req.meeting;

	meeting = _.extend(meeting, req.body);

	meeting.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(meeting);
		}
	});
};

// exports.checkPermission = function(req, res, next) {
// 	console.log(req.user, 1);
// 	if(req.meeting.users.indexOf("12345")!=-1){
// 		next();
// 	}else{
// 		res.send(403, {message: 'Unauthorized'});
// 	}
// };

exports.delete = function(req, res) {
	var meeting = req.meeting;

	meeting.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(meeting);
		}
	});
};
