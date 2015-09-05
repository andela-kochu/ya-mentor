'use strict';

// mentors service used for communicating with the mentors REST endpoint
angular.module('mentors').factory('mentors', ['$resource',
	function($resource) {
		return $resource('mentors', {}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);