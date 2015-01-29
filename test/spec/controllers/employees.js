'use strict';

describe('Controller: EmployeesCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardUiApp'));

  var EmployeesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmployeesCtrl = $controller('EmployeesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
