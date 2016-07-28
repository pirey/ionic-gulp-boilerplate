/* 
 * This file contains all the necessary stuff to kickstart the app 
 *
 */

(function() {
  'use strict';

  angular.module('Ongkirku')
    .run(appRun);

  appRun.$inject = ['$ionicPlatform'];

  function appRun($ionicPlatform) {

    $ionicPlatform.ready(function() {
      // save to use plugins here
    });

    // add possible global event handlers here

  }

})();
