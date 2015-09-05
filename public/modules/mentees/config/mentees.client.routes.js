'use strict';

// Setting up route
angular.module('mentees').config(['$stateProvider',
	function($stateProvider) {
		// mentees state routing
		$stateProvider.
		state('profile', {
			url: '/settings/profile',
			templateUrl: 'modules/mentees/views/settings/edit-profile.client.view.html'
		}).
		state('password', {
			url: '/settings/password',
			templateUrl: 'modules/mentees/views/settings/change-password.client.view.html'
		}).
		state('accounts', {
			url: '/settings/accounts',
			templateUrl: 'modules/mentees/views/settings/social-accounts.client.view.html'
		}).
		state('signup', {
			url: '/signup',
			templateUrl: 'modules/mentees/views/authentication/signup.client.view.html'
		}).
		state('signin', {
			url: '/signin',
			templateUrl: 'modules/mentees/views/authentication/signin.client.view.html'
		}).
		state('forgot', {
			url: '/password/forgot',
			templateUrl: 'modules/mentees/views/password/forgot-password.client.view.html'
		}).
		state('reset-invalid', {
			url: '/password/reset/invalid',
			templateUrl: 'modules/mentees/views/password/reset-password-invalid.client.view.html'
		}).
		state('reset-success', {
			url: '/password/reset/success',
			templateUrl: 'modules/mentees/views/password/reset-password-success.client.view.html'
		}).
		state('mentors', {
			url: '/mentors',
			templateUrl: 'modules/mentees/views/dashboard/dashboard.mentors.view.html'
		}).
		state('mentee', {
			url: '/mentees/:mentee_id/profile',
			templateUr: 'modules/mentees/views/dashboard/mentee_profile.view.html'
		}).
		state('reset', {
			url: '/password/reset/:token',
			templateUrl: 'modules/mentees/views/password/reset-password.client.view.html'
		});
	}
]);