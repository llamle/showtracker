/*jslint white:true */
/*global angular */

var app = angular.module('MyApp', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap']);

(function () {
    "use strict";
    app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
        $locationProvider.html5Mode(true); 

        $routeProvider
            .when('/', {
                templateUrl: 'public/views/home.html',
                controller: 'MainCtrl'
            })
            .when('/shows/:id', {
                templateUrl: 'public/views/detail.html',
                controller: 'DetailCtrl'
            })
            .when('/login', {
                templateUrl: 'public/views/login.html',
                controller: 'LoginCtrl'
            })
            .when('/signup', {
                templateUrl: 'public/views/signup.html',
                controller: 'SignupCtrl'
            })
            .when('/add', {
                templateUrl: 'public/views/add.html',
                controller: 'AddCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    
    }]);
}());
