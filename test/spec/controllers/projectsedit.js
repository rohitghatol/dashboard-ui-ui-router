'use strict';

describe('Controller: ProjectseditCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardUiApp'));

  var ProjectseditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectseditCtrl = $controller('ProjectseditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
