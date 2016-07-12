'use_strict';

angular
  .module('challengeList')
  .component('challengeList', {
    templateUrl: 'challenge-list/challenge-list.template.html',
    controller: ('ChallengeListController', ['$scope', '$http',
      function ChallengeListController($scope, $http) {
        var self = $scope;
        self.title = "Challenges List";

        var params = $.param({
          sort_by: "ends_at",
          on_board: 0
        });

        var headers = {
          headers: {"Http-Es-Access-Token": "Kz13ZzmE_8mrh_7iiZZziQ"}
        }

        $http.get('http://192.168.3.3:3000/api/web_v1/challenges?' + params, headers)
          .success(function (response) {
            console.log(response);
            self.challenges = response.challenge_data["challenges"]
            self.total_rewards = response.challenge_data["total_rewards"]
          }).error(function (response) {
          console.log("Failed!");
        })
      }
    ])
  })
  