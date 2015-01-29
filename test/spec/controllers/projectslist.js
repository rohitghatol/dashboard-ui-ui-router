'use strict';

describe('Controller: ProjectslistCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardUiApp'));

  var ProjectslistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectslistCtrl = $controller('ProjectslistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
