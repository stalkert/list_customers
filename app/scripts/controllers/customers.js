;
(function () {
  'use strict';

  angular.module('listCustomersApp')
    .controller('CustomersCtrl', ['CustomerFire','$rootScope', function (CustomerFire,$rootScope) {
      $rootScope.customers = 'active';
      $rootScope.home = '';
      var cs = this;
      CustomerFire.getCustomers(function (data) {
        cs.customers = data;
      });
      cs.customer = {
        name: null,
        email: null,
        tel: null,
        address: null,
        street: null,
        city: null,
        state: null,
        zip: null
      };
      cs.addCustomer = function () {
        CustomerFire.addCustomer(cs.customer);
        cs.customer = null;
      };
      cs.setEdit = function (customer) {
        cs.customer = customer;
      };
      cs.updateCustomer = function () {
        CustomerFire.updateCustomer(cs.customer);
        cs.customer = null;
      };
      cs.clear = function () {
        cs.customer = null;
      };
      cs.deleteCustomer =function(){
        CustomerFire.deleteCustomer(cs.customer.$id);
        cs.customer = null;
      }
    }]);
})();
