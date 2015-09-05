'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Article Schema
 */
var VenueSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	name: {
		type: String,
		required: 'Name of venue is required'
	},
	perks: {
		type: [String]
	}
});

mongoose.model('Venue', VenueSchema);
