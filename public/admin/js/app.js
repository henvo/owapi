
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
    vm.submit = function() {
      $http.post('/apis', { "name": vm.name, "status": vm.status })
        .then(function(response) {
          vm.api = vm.name
        }, function(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
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
