
angular.module('docsRoutes', ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/static/docs/views/pages/home.html',
        controller: 'homeController',
        controllerAs: 'home'
      })
  })
