(function(){
    'use strict';

    angular.module('DIApp', [])
    .controller('DIController', DIController);

    DIController.$inject = ['$scope', '$filter']  // for avoiding lost when implement the minification
    function DIController ($scope, $filter){
        $scope.name = "Nisala";

        $scope.upper = function() {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };
    }

    

})();