angular.module('myApp', ['ngMessages'])

.controller('myCtrl', function ($scope) {
    $scope.gender = 'female';
    $scope.word = {};
    $scope.showText = false;
    
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
    };
    
    $scope.submit = function () {
        if($scope.formLib.$valid){
            $scope.showText = true;
        }
    };
    
    // Default values
    $scope.startOver = function(){
        $scope.gender = 'female';
        $scope.word={};
        $scope.showText=false;
        $scope.formLib.$submitted=false;
    };
});