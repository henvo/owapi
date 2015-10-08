
angular.module('owapiRoutes', ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl: '/static/views/pages/home.html',
      controller: 'apiCtrl'
    })
      .when('/apis', {
        templateUrl: '/static/views/pages/list.html',
        controller: 'apiCtrl'
      })
      .when('/new', {
        templateUrl: '/static/views/pages/new.html',
        controller: 'apiCtrl'
      })
      .when('/apis/:slug', {
        templateUrl: '/static/views/pages/detail.html',
        controller: 'apiCtrl'
      })
      .when('/users/:slug', {
        templateUrl: '/static/views/pages/users.html',
        controller: 'userCtrl'
      })
  })
