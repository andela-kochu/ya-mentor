angular.module('mentees').controller('menteeCntrl', ['$scope', function($scope) {
  
  $scope.mentees = [
    {
      name: "Agboola Olaide",
      email: "lydexmail@yahoo.com",
      stuff: "student"
    },
    {
      name: "Agboola Olaide",
      email: "lydexmail@yahoo.com",
      stuff: "student"
    },
    {
      name: "Agboola Olaide",
      email: "lydexmail@yahoo.com",
      stuff: "student"
    },
  ]

  $scope.display_mentee = function() {
    angular.forEach($scope.mentees, function(x, y) {
      console.log(x, y);
    });
  }
  $scope.display_mentee()
}]);