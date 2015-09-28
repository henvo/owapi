angular.module('owapi', ['owapiRoutes'])
  .controller('mainController', function() {
    var vm = this
    vm.error_message = "This is a very bad error!!"
  })
  // Controller of 'home' view
  .controller('homeController', function() {
    var vm = this
  })

  // Controller of 'list' view
  .controller('listController', function($http, $filter) {
    var vm = this
    $http.get("/apis")
      .success(function(apis) {
        vm.apis = apis.data
      })

    vm.setApiStatus = function(api, status) {
      var found = $filter('filter')(vm.apis, { name: api }, true)
      if (found.length) {
        found[0].status = status
        console.log(0)
        $http.put(
          "/apis/" + found[0].name,
          found[0]
        )
      }
    }
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
        "status": "inactive",
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
    vm.isModified = false

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
      vm.isModified = true
    }

    vm.addResourceProperty = function() {
      vm.api.resources[vm.selectedResource][vm.newPropertyName] = "String"
      vm.newPropertyName = ""
      vm.isModified = true
    }

    vm.removeResource = function(resourceName) {
      delete vm.api.resources[resourceName]
      vm.isModified = true
    }

    vm.update = function() {
      $http.put(
        "/apis/" + vm.api.name,
        vm.api
      )
      .success(function() {
        vm.isModified = false
      })
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
    $http.get("/users/" + $routeParams.slug )
      .success(function(user) {
        vm.user = user.data
      })

      vm.update = function() {
        $http.put(
          "/users/" + vm.user.name,
          vm.api
        )
      }

  }])
