(function () {
  'use strict';
  
  angular.module('NameCalculator', [])
  
  .controller('NameCalculatorController', function ($scope) {
      $scope.name = '';
      $scope.totalValue = 0;

      $scope.displayNumeric = function () {
        var totalNameValue = CalculateNumerciForString($scope.name);
        $scope.totalValue = totalNameValue;
      };

      function CalculateNumerciForString(string){
        var totalStringValue = 0;
        for(var i=0; i<string.length; i++){
          totalStringValue += string.charCodeAt(i);
        }

        return totalStringValue;
      }
  });
  
  })();
  