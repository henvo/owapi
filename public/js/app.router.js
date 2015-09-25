
angular.module('owapiRoutes', ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/static/views/pages/home.html',
        controller: 'homeController',
        controllerAs: 'home'
      })
      .when('/apis', {
        templateUrl: '/static/views/pages/list.html',
        controller: 'listController',
        controllerAs: 'list'
      })
      .when('/new', {
        templateUrl: '/static/views/pages/new.html',
        controller: 'newController',
        controllerAs: 'new'
      })
      .when('/apis/:slug', {
        templateUrl: '/static/views/pages/detail.html',
        controller: 'detailController',
        controllerAs: 'detail'
      })
      .when('/users/:slug', {
        templateUrl: '/static/views/pages/users.html',
        controller: 'usersController',
        controllerAs: 'users'
      })
  })
