'use strict';

// Declare app level module
var myApp = angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise(
            {
                templateUrl: 'templates/EnterSale.html',
                controller: 'EnterSaleController'
            });
    }]);
