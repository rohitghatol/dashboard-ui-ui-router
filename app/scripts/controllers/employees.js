'use strict';

/**
 * @ngdoc function
 * @name dashboardUiApp.controller:EmployeesCtrl
 * @description
 * # EmployeesCtrl
 * Controller of the dashboardUiApp
 */
angular.module('dashboardUiApp')
  .controller('EmployeesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
