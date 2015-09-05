'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Article Schema
 */
var MeetingSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	venue: {
		type: Schema.ObjectId,
		ref: 'Venue'
	},
	dateOfMeeting: {
		type: Date,
	},
	users: [{type: Schema.ObjectId,ref: 'User'}],
  status: {
    type: Number
  }
});

mongoose.model('Meeting', MeetingSchema);
