'use strict';

/**
 * @ngdoc function
 * @name dashboardUiApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the dashboardUiApp
 */
angular.module('dashboardUiApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
