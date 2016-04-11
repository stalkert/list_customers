;(function() {
  'use strict';

  angular.module('listCustomersApp')
    .factory('CustomerFire',['$firebaseObject','$firebaseArray','FIREBASE_URL', function CustomerFireFactory($firebaseObject,$firebaseArray,FIREBASE_URL) {
      var ref = new Firebase(FIREBASE_URL);
      var refArr = $firebaseArray(ref);
      var customersRef = ref.child('customers');
      var customersArr = $firebaseArray(customersRef);
      return {
        getCustomers:function(callback){
          return customersArr.$loaded(callback);
        },
        addCustomer: function(customer){
          var customersCount = $firebaseObject(ref.child('options').child('countCustomers'));
          customersCount.$loaded(function(){
            var csCount = ++customersCount.$value;
            customersCount.$save();
            customersRef.child(csCount).set(customer);
          });

        },
        updateCustomer: function(customer){
          return customersArr.$save(customer);
        },
        deleteCustomer:function(id){
          customersRef.child(id).remove();
        }

      };

    }]);
})();
