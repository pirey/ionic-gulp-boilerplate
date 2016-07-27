/* jshint strict: false */
describe('Home Controller', function() {
  var $scope;
  var controller;

  beforeEach(function() {

    module('Ongkirku');

    inject(function(_$rootScope_, _$controller_) {

      $scope = _$rootScope_.$new();
      controller = _$controller_('HomeController', {$scope: $scope});

    });

  });

  describe('default state', function() {

    it('should be defined', function() {
      expect(controller).toBeDefined();
    });

    it('should have empty myHTML', function() {
      expect($scope.myHTML).toBeFalsy();
    });

  });

  it('should say hello', function() {
    expect($scope.sayHello()).toEqual('hello');
    expect('test').toEqual('test');
  });

});
