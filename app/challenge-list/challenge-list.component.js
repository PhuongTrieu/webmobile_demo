'use_strict';

angular
  .module('challengeList')
  .component('challengeList', {
    templateUrl: 'challenge-list/challenge-list.template.html',
    controller: ('ChallengeListController', ['$scope', 'APIService',
      function ChallengeListController($scope, APIService) {
        var self = $scope;
        self.title = "Challenge List";
        APIService.getInfoBaseCamp("ends_at", 0)
          .success(function (response) {
            self.challenges = response.challenge_data["challenges"];
            self.total_rewards = response.challenge_data["total_rewards"];
          }).error(function (response) {
          console.log("Failed!");
        });
      }])
  });
