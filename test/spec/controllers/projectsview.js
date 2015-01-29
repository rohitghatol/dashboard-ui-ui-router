'use strict';

describe('Controller: ProjectsviewCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardUiApp'));

  var ProjectsviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectsviewCtrl = $controller('ProjectsviewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
