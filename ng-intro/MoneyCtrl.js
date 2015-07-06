(function () {
  'use strict';
  angular
    .module('luca')
    .controller('MoneyController', function ($scope, MoneyService) {
      $scope.items = MoneyService.get();
      $scope.peeps = MoneyService.getPeeps();
    });

})();
