(function () {
    'use strict';
    
    angular.module('myFirstApp', [])
    
    .controller('MyFirstController', function ($scope) {
        $scope.name = 'Nisala'
        $scope.sayHello = function(){
            return ('Hello I am nisala')
        }
    });
    
    })();