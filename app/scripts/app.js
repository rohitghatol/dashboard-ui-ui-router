'use strict';

/**
 * @ngdoc overview
 * @name dashboardUiApp
 * @description
 * # dashboardUiApp
 *
 * Main module of the application.
 */
angular
  .module('dashboardUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard',{
        templateUrl:'views/dashboard.html',
        controller:'DashboardCtrl',
        url:'/dashboard'
      })
      .state('organizations',{
        templateUrl:'views/organizations.html',
        controller:'OrganizationsCtrl',
        url:'/organizations'
      })
      .state('organizations.list',{
        templateUrl:'views/organizations.list.html',
        controller:'OrganizationslistCtrl',
        url:'/list'
      })
      .state('organizations.view',{
        templateUrl:'views/organizations.view.html',
        controller:'OrganizationsviewCtrl',
        url:'/view'
      })
      .state('organizations.edit',{
        templateUrl:'views/organizations.edit.html',
        controller:'OrganizationseditCtrl',
        url:'/edit'
      })
      .state('projects',{
        templateUrl:'views/projects.html',
        controller:'ProjectsCtrl',
        url:'/projects'
      })
      .state('projects.list',{
        templateUrl:'views/projects.list.html',
        controller:'ProjectsListCtrl',
        url:'/list'
      })
      .state('projects.view',{
        templateUrl:'views/projects.view.html',
        controller:'ProjectsViewCtrl',
        url:'/view'
      })
      .state('projects.edit',{
        templateUrl:'views/projects.edit.html',
        controller:'ProjectsEditCtrl',
        url:'/edit'
      })
      .state('employees',{
        templateUrl:'views/employees.html',
        controller:'EmployeesCtrl',
        url:'/employees'
      });


  })
  .run(function($state){
    $state.go('dashboard');
  });
