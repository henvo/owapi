
angular.module('admin', ['adminRoutes'])
  .controller('mainController', function() {
    var vm = this
  })
  // Controller of 'home' view
  .controller('homeController', function() {
    var vm = this
  })

  // Controller of 'list' view
  .controller('listController', function($http) {
    var vm = this
    $http.get("/apis")
      .success(function(apis) {
        vm.apis = apis
      })
  })
  // Controller of 'new' view
  .controller('newController', function($http) {
    var vm = this
    vm.resources = {}
    vm.temp = {}

    vm.addResource = function() {
      vm.resources[vm.temp.resourceName] = {}
      vm.temp.resourceName = ""
    }

    vm.addProperty = function(resourceKey) {
      vm.resources[resourceKey][vm.temp.properties[resourceKey]] = ""
      vm.temp.properties[resourceKey] = ""
    }

    vm.submit = function() {
      $http.post('/apis', {
        "name": vm.name,
        "status": vm.status,
        "info": vm.info,
        "resources": vm.resources
      })
      .then(function(response) {
        vm.response = response
      }, function(response) {
        // error
      })
    }
  })
  // Controller of detail view
  .controller('detailController', ['$http', '$routeParams', function($http, $routeParams) {
    var vm = this
    vm.name = $routeParams.slug
    $http.get("/apis/" + vm.name )
      .success(function(api) {
        vm.api = api
      })
  }])
