'use strict';

/**
 * @ngdoc function
 * @name dashboardUiApp.controller:ProjectslistCtrl
 * @description
 * # ProjectslistCtrl
 * Controller of the dashboardUiApp
 */
angular.module('dashboardUiApp')
  .controller('ProjectslistCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
