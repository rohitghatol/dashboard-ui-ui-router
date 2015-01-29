'use strict';

describe('Controller: OrganizationslistCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardUiApp'));

  var OrganizationslistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrganizationslistCtrl = $controller('OrganizationslistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
