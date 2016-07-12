'use strict';

angular.
  module('webmobile_demo').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/challenges', {
          template: '<challenge-list></challenge-list>'
        }).
        otherwise('/challenges', {
          template: '<challenge-list></challenge-list>'
        });
    }
  ]);
