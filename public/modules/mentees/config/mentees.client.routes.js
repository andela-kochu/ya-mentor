'use strict';

// Setting up route
angular.module('mentees').config(['$stateProvider',
	function($stateProvider) {
		// mentees state routing
		$stateProvider.
		state('mentee-profile', {
			url: '/settings/mentee-profile',
			templateUrl: 'modules/mentees/views/settings/edit-profile.client.view.html'
		}).
		state('mentee-password', {
			url: '/settings/mentee-password',
			templateUrl: 'modules/mentees/views/settings/change-password.client.view.html'
		}).
		state('mentee-accounts', {
			url: '/settings/mentee-accounts',
			templateUrl: 'modules/mentees/views/settings/social-accounts.client.view.html'
		}).
		state('mentee-signup', {
			url: '/mentee-signup',
			templateUrl: 'modules/mentees/views/authentication/signup.client.view.html'
		}).
		state('mentee-signin', {
			url: '/mentee-signin',
			templateUrl: 'modules/mentees/views/authentication/signin.client.view.html'
		}).
		state('mentee-forgot', {
			url: '/password/mentee-forgot',
			templateUrl: 'modules/mentees/views/password/forgot-password.client.view.html'
		}).
		state('mentee-reset-invalid', {
			url: '/password/reset/mentee-invalid',
			templateUrl: 'modules/mentees/views/password/reset-password-invalid.client.view.html'
		}).
		state('mentee-reset-success', {
			url: '/password/reset/mentee-success',
			templateUrl: 'modules/mentees/views/password/reset-password-success.client.view.html'
		}).
		state('mentee-mentors', {
			url: '/mentee-mentors',
			templateUrl: 'modules/mentees/views/dashboard/dashboard.mentors.view.html'
		}).
		state('mentee-mentee', {
			url: '/mentees/:mentee_id/mentee-profile',
			templateUr: 'modules/mentees/views/dashboard/mentee_profile.view.html'
		}).
		state('mentee-reset', {
			url: '/password/reset/:token',
			templateUrl: 'modules/mentees/views/password/reset-password.client.view.html'
		});
	}
]);