'use strict';

/**
 * @ngdoc function
 * @name dashboardUiApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the dashboardUiApp
 */
angular.module('dashboardUiApp')
  .controller('ProjectsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
