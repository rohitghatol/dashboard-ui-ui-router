'use strict';

/**
 * @ngdoc function
 * @name dashboardUiApp.controller:ProjectsviewCtrl
 * @description
 * # ProjectsviewCtrl
 * Controller of the dashboardUiApp
 */
angular.module('dashboardUiApp')
  .controller('ProjectsviewCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
