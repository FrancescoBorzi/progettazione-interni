(function() {
  var app = angular.module('prog-int', ['ui.router', 'ui.bootstrap', 'angular-carousel']);

  app.controller("visuallightbox", function($scope){
    $.getScript("js/visuallightbox/visuallightbox.js");
    $.getScript("js/visuallightbox/vlbdata1.js");
  });

  app.controller("HomeController", function($scope){
    $scope.slides = [
      { img: "img/progetti3D/vistanott4.jpg" },
      { img: "img/progetti3D/vistanott.jpg" },
      { img: "img/progetti3D/render7.jpg" },
      { img: "img/progetti3D/render6.jpg" },
      { img: "img/progetti3D/render5.jpg" },
      { img: "img/progetti3D/render4.jpg" },
      { img: "img/progetti3D/render3.jpg" },
      { img: "img/progetti3D/render2.jpg" },
      { img: "img/progetti3D/render1.jpg" },
      { img: "img/progetti3D/16.png" },
      { img: "img/progetti3D/13.png" },
      { img: "img/progetti3D/12.png" },
      { img: "img/progetti3D/7.png" }
    ];
  });

})()
