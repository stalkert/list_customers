;(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name listCustomersApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the listCustomersApp
   */
  angular.module('listCustomersApp')
    .controller('CustomersCtrl',['$firebaseArray','FIREBASE_URL', function ($firebaseArray,FIREBASE_URL) {
      var cs = this;
      var ref = new Firebase(FIREBASE_URL);
      var refArr = $firebaseArray(ref);
      refArr.$loaded(function(){
        cs.dbArr = refArr;
      })
    }]);
})();
