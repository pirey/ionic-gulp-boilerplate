(function() {
  'use strict';

  angular.module('Ongkirku')

    .config(routeConfig);

  routeConfig.$inject = ['$httpProvider', '$stateProvider', '$urlRouterProvider'];

  function routeConfig($httpProvider, $stateProvider, $urlRouterProvider) {
      // register $http interceptors, if any. e.g.
      // $httpProvider.interceptors.push('interceptor-name');

      // Application routing
      $stateProvider
        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/main.html',
          controller: 'MainController'
        })
        .state('app.home', {
          url: '/home',
          cache: true,
          views: {
            'viewContent': {
              templateUrl: 'templates/views/home.html',
              controller: 'HomeController'
            }
          }
        })
        .state('app.settings', {
          url: '/settings',
          cache: true,
          views: {
            'viewContent': {
              templateUrl: 'templates/views/settings.html',
              controller: 'SettingsController'
            }
          }
        });


        // redirects to default route for undefined routes
        $urlRouterProvider.otherwise('/app/home');
    }

})();
