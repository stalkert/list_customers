;(function() {
  'use strict';

  angular.module('listCustomersApp')
    .factory('CustomerFire',['$firebase','FIREBASE_URL', function CustomerFireFactory($firebase,FIREBASE_URL) {
      var ref = new Firebase(FIREBASE_URL);
      var refArr = $firebaseArray(ref).
      return {


      };

    }]);
})();
