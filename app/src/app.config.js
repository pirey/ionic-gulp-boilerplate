/*
 * This is the main app's config
 *
 */
(function() {
  'use strict';

  angular.module('Ongkirku')
    .constant('appConfig', {

      apiEndpoint: {
        host: 'http://localhost',
        port: 3000,
        path: '',
        needsAuth: false
      }

      // add more config items here
      // ...

    });
})();

