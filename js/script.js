angular.module('myApp', [])

.controller('myCtrl', function ($scope) {
    $scope.gender = 'female';
    $scope.showText = false;
    $scope.word = {};
    
    $scope.sheOrHe = 'she';
    $scope.herOrHis = 'her';
    $scope.herOrHim = 'her';
    $scope.genName = 'Female';
    
    $scope.changeGenTxt = function () {
      if($scope.gender == 'female'){
          $scope.sheOrHe = 'she';
          $scope.herOrHis = 'her';
          $scope.herOrHim = 'her';
          $scope.genName = 'Female';
      } else {
          $scope.sheOrHe = 'he';
          $scope.herOrHis = 'his';
          $scope.herOrHim = 'him';
          $scope.genName = 'Male';
      }
    }
});