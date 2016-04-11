;(function(){
'use strict';
$.material.init();
/**
 * @ngdoc overview
 * @name listCustomersApp
 * @description
 * # listCustomersApp
 *
 * Main module of the application.
 */
angular
  .module('listCustomersApp', [
    'ngCookies',
    'ngRoute',
    'firebase'
  ])
  .constant('FIREBASE_URL','https://listcustomers.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'ctrl'
      })
      .when('/customers', {
        templateUrl: 'views/customers.html',
        controller: 'CustomersCtrl',
        controllerAs: 'ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
})();
