'use strict';

angular.module('mentors').controller('MentorController', ['$scope', '$http', '$location', 'Authentication', 'Mentors', '$stateParams',
  function($scope, $http, $location, Authentication, Mentors, $stateParams) {
    $scope.authentication = Authentication;

    $scope.mentofr = {
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
      Skype: 'Skype'
    };
    $scope.mentors = Mentors.query();
  $scope.find = function(){
    $scope.mentor = Mentors.get({
        mentorId: $stateParams.mentorId
      });
    console.log($scope.mentor);
    }
  };
    $scope.mentfors = [
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