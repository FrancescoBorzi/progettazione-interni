(function() {
  var app = angular.module('prog-int');

  app.controller("ProjectController", function($scope) {
    this.projects = [
      { src: "11_7", desc: "Prog. Interni: ristrutturazioni."},
      { src: "12_16", desc: "Prog. Interni: arredamento."},
      { src: "24_23", desc: "Prog. Interni: ex novo."},
      { src: "25_6", desc: "Prog. Interni: soluzioni diverse…"},
      { src: "26_27", desc: "Prog. Interni: nuova distribuzione…"},
      { src: "Immagine-1.-_Stima-di-un-immobile_", desc: "Progetti recenti: stima di un immobile"},
      { src: "Immagine-2.-_Sfruttato-al-massimo_", desc: "Progetti recenti: sfruttato al massimo."},
      { src: "Immagine-3.-_Abitare-in-campagna_", desc: "Progetti recenti: abitare in campagna."},
      { src: "Immagine-4.-_Appartamento-mare-monti_", desc: "Progetti recenti: appartamenti mari e monti."},
      { src: "Immagine-5.-_Vivere-in-mansarda_", desc: "Progetti recenti: vivere in mansarda."},
      { src: "Immagine-6.-_Lingresso-aperto_", desc: "Progetti recenti: l’ingresso aperto."}
    ];
  });

  app.controller("HomeController", function($scope){
    $scope.slides = [
      { img: "img/progetti3D/1.jpg" },
      { img: "img/progetti3D/vistanott4.jpg" },
      { img: "img/progetti3D/vistanott.jpg" },
      { img: "img/progetti3D/render7.jpg" },
      { img: "img/progetti3D/render6.jpg" },
      { img: "img/progetti3D/render5.jpg" },
      { img: "img/progetti3D/render4.jpg" },
      { img: "img/progetti3D/render3.jpg" },
      { img: "img/progetti3D/render2.jpg" },
      { img: "img/progetti3D/render1.jpg" },
      { img: "img/progetti3D/18.png" },
      { img: "img/progetti3D/16.png" },
      { img: "img/progetti3D/13.png" },
      { img: "img/progetti3D/12.png" },
      { img: "img/progetti3D/7.png" },
      { img: "img/progetti3D/render11.jpg" },
      { img: "img/progetti3D/render12.jpg" },
      { img: "img/progetti3D/render13.jpg" },
      { img: "img/progetti3D/render14.jpg" }
    ];
  });


  app.controller("Project3DController", function($scope) {
    this.projects = [
      { src: "1.png", thumbnail: "1-thumbnail.png" },
      { src: "2.png", thumbnail: "2-thumbnail.png" },
      { src: "3.png", thumbnail: "3-thumbnail.png" },
      { src: "4.png", thumbnail: "4-thumbnail.png" },
      { src: "7.png", thumbnail: "7-thumbnail.png" },
      { src: "8.png", thumbnail: "8-thumbnail.png" },
      { src: "9.png", thumbnail: "9-thumbnail.png" },
      { src: "11.png", thumbnail: "11-thumbnail.png" },
      { src: "12.png", thumbnail: "12-thumbnail.png" },
      { src: "13.png", thumbnail: "13-thumbnail.png" },
      { src: "15.png", thumbnail: "15-thumbnail.png" },
      { src: "16.png", thumbnail: "16-thumbnail.png" },
      { src: "17.png", thumbnail: "17-thumbnail.png" },
      { src: "18.png", thumbnail: "18-thumbnail.png" },
      { src: "render1.jpg", thumbnail: "render1-thumbnail.jpg" },
      { src: "render2.jpg", thumbnail: "render2-thumbnail.jpg" },
      { src: "render3.jpg", thumbnail: "render3-thumbnail.jpg" },
      { src: "render4.jpg", thumbnail: "render4-thumbnail.jpg" },
      { src: "render5.jpg", thumbnail: "render5-thumbnail.jpg" },
      { src: "render6.jpg", thumbnail: "render6-thumbnail.jpg" },
      { src: "render7.jpg", thumbnail: "render7-thumbnail.jpg" },
      { src: "render8.jpg", thumbnail: "render8-thumbnail.jpg" },
      { src: "render9.jpg", thumbnail: "render9-thumbnail.jpg" },
      { src: "render10.jpg", thumbnail: "render10-thumbnail.jpg" },
      { src: "render11.jpg", thumbnail: "render11-thumbnail.jpg" },
      { src: "render12.jpg", thumbnail: "render12-thumbnail.jpg" },
      { src: "render13.jpg", thumbnail: "render13-thumbnail.jpg" },
      { src: "render14.jpg", thumbnail: "render14-thumbnail.jpg" },
      { src: "vistanott.jpg", thumbnail: "vistanott-thumbnail.jpg" },
      { src: "vistanott4.jpg", thumbnail: "vistanott4-thumbnail.jpg" }
    ];
  });

  app.controller("CampagnaController", function($scope) {
    this.projects = [
      { src: "ambienteliving" },
      { src: "cameraragazzi" },
      { src: "soggiorno" },
      { src: "soggiorno2" }
    ];
  });

  app.controller("CittaController", function($scope) {
    this.projects = [
      { src: "vista1-1" },
      { src: "vista_alto" },
      { src: "vista2" }
    ];
  });

  app.controller("RusticoController", function($scope) {
    this.projects = [
      { src: "vista1-rustico" },
      { src: "vista2-rustico" },
      { src: "vista3-rustico" },
      { src: "vista4-rustico" },
      { src: "camino" }
    ];
  });

})()
