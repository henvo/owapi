
angular.module('admin', ['adminRoutes'])
  .controller('mainController', function() {
    var vm = this
  })

  .controller('homeController', function() {
    var vm = this
  })

  .controller('listController', function($http) {
    var vm = this
    $http.get("/apis")
      .success(function(apis) {
        vm.apis = apis
      })

    vm.message = 'test'
  })

  .controller('newController', function() {
    var vm = this
  })
