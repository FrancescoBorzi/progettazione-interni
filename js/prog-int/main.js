(function() {
  var app = angular.module('prog-int', ['ui.router', 'ui.bootstrap']);

  app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider
    .state('home', {
      url: '/home',
      views: {
        '': {
          templateUrl: 'partials/home.html'
        },
        'home-bottom': {
          templateUrl: 'partials/home-bottom.html'
        }
      }
    })
    .state('chi-siamo', {
      url: '/chi-siamo',
      views: {
        '': {
          templateUrl: 'partials/chi-siamo.html'
        }
      }
    })
    .state('realizzazione-villette', {
      url: '/realizzazione-villette',
      views: {
        '': {
          templateUrl: 'partials/realizzazione-villette.html'
        }
      }
    })
    .state('progetti', {
      url: '/progetti',
      views: {
        '': {
          templateUrl: 'partials/progetti.html'
        }
      }
    })
    .state('contatti', {
      url: '/contatti',
      views: {
        '': {
          templateUrl: 'partials/contatti.html'
        }
      }
    })
    .state('progetti-3D', {
      url: '/progetti-3D',
      views: {
        '': {
          templateUrl: 'partials/progetti-3D.html'
        }
      }
    })
    .state('suddivisione-di-una-casa-in-campagna-in-due-alloggi', {
      url: '/suddivisione-di-una-casa-in-campagna-in-due-alloggi',
      views: {
        '': {
          templateUrl: 'partials/progetti/suddivisione-di-una-casa-in-campagna-in-due-alloggi.html'
        }
      }
    })
    .state('ristrutturazione-di-una-casa-in-citta', {
      url: '/ristrutturazione-di-una-casa-in-citta',
      views: {
        '': {
          templateUrl: 'partials/progetti/ristrutturazione-di-una-casa-in-citta.html'
        }
      }
    })
    .state('riorganizzazione-di-un-rustico', {
      url: '/riorganizzazione-di-un-rustico',
      views: {
        '': {
          templateUrl: 'partials/progetti/riorganizzazione-di-un-rustico.html'
        }
      }
    })
    
  });

  app.controller("ProjectController", function($scope){
    this.projects = [
      { src: "11_7-150x150.jpg", desc: "Prog. Interni: ristrutturazioni."},
      { src: "12_16-150x150.jpg", desc: "Prog. Interni: arredamento."},
      { src: "24_23-150x150.jpg", desc: "Prog. Interni: ex novo."},
      { src: "25_6-150x150.jpg", desc: "Prog. Interni: soluzioni diverse…"},
      { src: "26_27-150x150.jpg", desc: "Prog. Interni: nuova distribuzione…"},
      { src: "Immagine-1.-_Stima-di-un-immobile_-150x150.jpg", desc: "Progetti recenti: stima di un immobile"},
      { src: "Immagine-2.-_Sfruttato-al-massimo_-150x150.jpg", desc: "Progetti recenti: sfruttato al massimo."},
      { src: "Immagine-3.-_Abitare-in-campagna_-150x150.jpg", desc: "Progetti recenti: abitare in campagna."},
      { src: "Immagine-4.-_Appartamento-mare-monti_-150x150.jpg", desc: "Progetti recenti: appartamenti mari e monti."},
      { src: "Immagine-5.-_Vivere-in-mansarda_-150x150.jpg", desc: "Progetti recenti: vivere in mansarda."},
      { src: "Immagine-6.-_Lingresso-aperto_-150x150.jpg", desc: "Progetti recenti: l’ingresso aperto."}
    ];
  });
})()
