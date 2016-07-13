'use strict';

// Define the `webmobileDemo` module
var webmobileDemo = angular.module('webmobileDemo', [
  'challengeList',
  'ngAnimate',
  'ngRoute',
  'core'
]);

window.fbAsyncInit = function() {
  FB.init({
    appId      : '260023184367720',
    xfbml      : true,
    version    : 'v2.5'
  });
};

(
  function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk')
);
