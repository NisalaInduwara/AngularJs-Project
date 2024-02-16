(function(){
    'use strict';

    angular.module('ExpressionInterpolation', [])
  
  .controller('ExpressInterpolationController', ExpressInterpolationController);

  ExpressInterpolationController.$inject['$scope'];

  function ExpressInterpolationController($scope){
    $scope.name = 'Nisala';
  }


})();