;(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name listCustomersApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the listCustomersApp
   */
  angular.module('listCustomersApp')
    .controller('HomeCtrl',['$rootScope', function ($rootScope) {
      $rootScope.home = 'active';
      $rootScope.customers = '';

    }]);
})();
