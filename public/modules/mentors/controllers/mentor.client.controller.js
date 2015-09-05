'use strict';

angular.module('mentors').controller('MentorController', ['$scope', '$http', '$location', 'Authentication',
  function($scope, $http, $location, Authentication) {
    $scope.authentication = Authentication;

    $scope.mentor = {
      uid: 12434324343243,
      fullName: 'Ashikodi Emeka',
      email: 'onyi.emi89@yahoo.com',
      picture: 'https://lh6.googleusercontent.com/-7eNZb9Ok2Mc/UqZ4d-0oZPI/AAAAAAAAAX8/_o-lkeFyMlE/w640-h480/Cool%2BSnapshot_Christian%2BPangalila.jpg',
      jobTitle: 'SOftGuy',
      longBio: 'I do this that and thoseI do this that and thoseI do this that and thoseI do this that and thoseI do this that and thoseI do this that and thoseI do this that and thoseI do this that and thoseI do this that and thoseI do this that and thoseI do this that and thoseI do this that and thoseI do this that and those',
      created: 11/11/11,
      gitHubUrl: 'github.com/andela-kochu',
      location: 'sabo,nigeria',
      linkedInUrl: 'linkedInUrl',
      twitterHandle: 'twitterHandle',
      Skype: 'Skype',
      
    };

    // If user is signed in then redirect back home
    if ($scope.authentication.user) $location.path('/');

    $scope.mentors = [
      {
        uid: 12434324343243,
        fullName: 'Ashikodi Emeka',
        email: 'onyi.emi89@yahoo.com',
        picture: 'https://lh6.googleusercontent.com/-7eNZb9Ok2Mc/UqZ4d-0oZPI/AAAAAAAAAX8/_o-lkeFyMlE/w640-h480/Cool%2BSnapshot_Christian%2BPangalila.jpg'
      },{
        uid: 12434324343243,
        fullName: 'Ashikodi Emeka',
        email: 'onyi.emi89@yahoo.com',
        picture: 'https://lh6.googleusercontent.com/-7eNZb9Ok2Mc/UqZ4d-0oZPI/AAAAAAAAAX8/_o-lkeFyMlE/w640-h480/Cool%2BSnapshot_Christian%2BPangalila.jpg'
      },{
        uid: 12434324343243,
        fullName: 'Ashikodi Emeka',
        email: 'onyi.emi89@yahoo.com',
        picture: 'https://lh6.googleusercontent.com/-7eNZb9Ok2Mc/UqZ4d-0oZPI/AAAAAAAAAX8/_o-lkeFyMlE/w640-h480/Cool%2BSnapshot_Christian%2BPangalila.jpg'
      },{
        uid: 12434324343243,
        fullName: 'Ashikodi Emeka',
        email: 'onyi.emi89@yahoo.com',
        picture: 'https://lh6.googleusercontent.com/-7eNZb9Ok2Mc/UqZ4d-0oZPI/AAAAAAAAAX8/_o-lkeFyMlE/w640-h480/Cool%2BSnapshot_Christian%2BPangalila.jpg'
      },{
        uid: 12434324343243,
        fullName: 'Ashikodi Emeka',
        email: 'onyi.emi89@yahoo.com',
        picture: 'https://lh6.googleusercontent.com/-7eNZb9Ok2Mc/UqZ4d-0oZPI/AAAAAAAAAX8/_o-lkeFyMlE/w640-h480/Cool%2BSnapshot_Christian%2BPangalila.jpg'
      },{
        uid: 12434324343243,
        fullName: 'Ashikodi Emeka',
        email: 'onyi.emi89@yahoo.com',
        picture: 'https://lh6.googleusercontent.com/-7eNZb9Ok2Mc/UqZ4d-0oZPI/AAAAAAAAAX8/_o-lkeFyMlE/w640-h480/Cool%2BSnapshot_Christian%2BPangalila.jpg'
      },{
        uid: 12434324343243,
        fullName: 'Ashikodi Emeka',
        email: 'onyi.emi89@yahoo.com',
        picture: 'https://lh6.googleusercontent.com/-7eNZb9Ok2Mc/UqZ4d-0oZPI/AAAAAAAAAX8/_o-lkeFyMlE/w640-h480/Cool%2BSnapshot_Christian%2BPangalila.jpg'
      },{
        uid: 12434324343243,
        fullName: 'Ashikodi Emeka',
        email: 'onyi.emi89@yahoo.com',
        picture: 'https://lh6.googleusercontent.com/-7eNZb9Ok2Mc/UqZ4d-0oZPI/AAAAAAAAAX8/_o-lkeFyMlE/w640-h480/Cool%2BSnapshot_Christian%2BPangalila.jpg'
      },{
        uid: 12434324343243,
        fullName: 'Ashikodi Emeka',
        email: 'onyi.emi89@yahoo.com',
        picture: 'https://lh6.googleusercontent.com/-7eNZb9Ok2Mc/UqZ4d-0oZPI/AAAAAAAAAX8/_o-lkeFyMlE/w640-h480/Cool%2BSnapshot_Christian%2BPangalila.jpg'
      },
    ];

  }
]);