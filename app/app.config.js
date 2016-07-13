'use strict';

angular.
  module('webmobileDemo').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/challenges', {
          template: '<challenge-list></challenge-list>'
        }).
        when('/challenges/:id', {
          template: '<challenge-detail></challenge-detail>'
        }).
        otherwise('/challenges');
    }
  ]);
