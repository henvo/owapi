angular.module('owapi', ['owapiRoutes'])
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
        vm.apis = apis.data
      })
  })
  // Controller of 'new' view
  .controller('newController', function($http, $location) {
    var vm = this
    vm.resources = {}
    vm.temp = {}

    vm.addResource = function() {
      vm.resources[vm.temp.resourceName] = {}
      vm.temp.resourceName = ""
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
        $location.path('/apis/')
      }, function(response) {
        // error
      })
    }
  })
  // Controller of detail view
  .controller('detailController', ['$http', '$routeParams', function($http, $routeParams) {
    var vm = this
    vm.name = $routeParams.slug
    vm.selectedResource, vm.newResourceName, vm.newPropertyName = ""

    vm.setSelectedResource = function(resourceName) {
      vm.selectedResource = resourceName
    }

    vm.addResource = function() {
      if(!vm.api.resources) {
        vm.api.resources = {}
      }
      vm.api.resources[vm.newResourceName] = {}
      vm.setSelectedResource(vm.newResourceName)
      vm.newResourceName = ""
    }

    vm.addResourceProperty = function() {
      vm.api.resources[vm.selectedResource][vm.newPropertyName] = "String"
      vm.newPropertyName = ""
    }

    vm.removeResource = function(resourceName) {
      delete vm.api.resources[resourceName]
    }

    vm.update = function() {
      $http.put(
        "/apis/" + vm.api.name,
        vm.api
      )
    }

    vm.refresh = function() {
      $http.get("/apis/" + vm.name )
        .success(function(api) {
          vm.api = api.data
        })
    }

    vm.refresh()

  }])
  // Users controller
  .controller('usersController', ['$http', '$routeParams', function($http, $routeParams) {
    var vm = this
    vm.name = $routeParams.slug
    $http.get("/users/" + vm.name )
      .success(function(user) {
        vm.user = user.data
      })
  }])
