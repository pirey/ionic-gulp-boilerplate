'use strict';

/**
 * @ngdoc function
 * @name Ongkirku.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('Ongkirku')
  .controller('HomeController', function($scope, ExampleService) {

    $scope.sayHello = sayHello;

    $scope.myHTML = null;

    // just an example...
    $scope.fetchRandomText = function() {
      ExampleService.doSomethingAsync()
        .then(ExampleService.fetchSomethingFromServer)
        .then(function(response) {
            $scope.myHTML = response.data.text;
            // close pull to refresh loader
            $scope.$broadcast('scroll.refreshComplete');
        });
    };

    $scope.fetchRandomText();

    function sayHello() {
      return 'hello';
    }

  });
