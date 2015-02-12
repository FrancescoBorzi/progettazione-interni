(function() {

  var app = angular.module('prog-int');

  app.config(function($stateProvider, $urlRouterProvider, $uiViewScrollProvider) {
    $uiViewScrollProvider.useAnchorScroll();

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
          templateUrl: 'partials/progetti.html',
          controller: 'visuallightbox'
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
          templateUrl: 'partials/progetti-3D.html',
          controller: 'visuallightbox'
        }
      }
    })
    .state('suddivisione-di-una-casa-in-campagna-in-due-alloggi', {
      url: '/suddivisione-di-una-casa-in-campagna-in-due-alloggi',
      views: {
        '': {
          templateUrl: 'partials/progetti/suddivisione-di-una-casa-in-campagna-in-due-alloggi.html',
          controller: 'visuallightbox'
        }
      }
    })
    .state('ristrutturazione-di-una-casa-in-citta', {
      url: '/ristrutturazione-di-una-casa-in-citta',
      views: {
        '': {
          templateUrl: 'partials/progetti/ristrutturazione-di-una-casa-in-citta.html',
          controller: 'visuallightbox'
        }
      }
    })
    .state('riorganizzazione-di-un-rustico', {
      url: '/riorganizzazione-di-un-rustico',
      views: {
        '': {
          templateUrl: 'partials/progetti/riorganizzazione-di-un-rustico.html',
          controller: 'visuallightbox'
        }
      }
    })

  });

})()
