'use_strict';

angular
  .module('challengeDetail')
  .component('challengeDetail', {
    templateUrl: 'challenge-detail/challenge-detail.template.html',
    controller: ['$routeParams', 'APIService',
      function ($routeParams, APIService) {
        var self = this;
        APIService.getChallengeDetail($routeParams.id)
          .success(function (response) {
            console.log(response);
            self.challenge = response.challenge_info;
            self.setImage(self.challenge["game_info"]["media"][0]["content"]);
            self.selectImages(self.challenge);
          }).error(function (response) {
          console.log('Failed!');
        });
        
        self.setImage = function setImage(imgUrl) {
          self.mainImageUrl = imgUrl;
        };
        
        self.selectImages = function selectImages(challenge) {
          var images = [];
          
          for(i = 0; i < challenge['game_info']['media'].length; i++) {
            images[i] = challenge['game_info']['media'][i]['content'];
          }
          self.challenge_images = images;
        };
      }
    ]
  });
  