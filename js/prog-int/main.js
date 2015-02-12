(function() {
  var app = angular.module('prog-int', ['ui.router', 'ui.bootstrap']);

  app.controller("visuallightbox", function($scope){
    $.getScript("js/visuallightbox/visuallightbox.js");
    $.getScript("js/visuallightbox/vlbdata1.js");
  });

})()
