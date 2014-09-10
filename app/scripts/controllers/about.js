'use strict';

/**
 * @ngdoc function
 * @name tpangularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tpangularApp
 */
angular.module('tpangularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
