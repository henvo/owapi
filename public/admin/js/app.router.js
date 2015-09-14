
angular.module('adminRoutes', ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/static/admin/views/pages/home.html',
        controller: 'homeController',
        controllerAs: 'home'
      })
      .when('/list', {
        templateUrl: '/static/admin/views/pages/list.html',
        controller: 'listController',
        controllerAs: 'list'
      })
      .when('/new', {
        templateUrl: '/static/admin/views/pages/new.html',
        controller: 'newController',
        controllerAs: 'new'
      })
      .when('/detail/:slug', {
        templateUrl: '/static/admin/views/pages/detail.html',
        controller: 'detailController',
        controllerAs: 'detail'
      })
  })
