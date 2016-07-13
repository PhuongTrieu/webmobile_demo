"use strict";

angular
  .module("core.APIService")
  .factory("APIService", ["$http",
    function ($http) {
      var factory = {};

      factory.getInfoBaseCamp = function (sort_by, onboard) {
        var params = $.param({
          sort_by: sort_by,
          on_board: onboard
        });
        var headers = {
          headers: {"Http-Es-Access-Token": "Kz13ZzmE_8mrh_7iiZZziQ"}
        };
        return $http.get('http://192.168.3.3:3000/api/web_v1/challenges?' + params, headers);
      };
      
      return factory;
    }
  ]);
  