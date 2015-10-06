// User Controller
app.controller('userCtrl', ['$scope', '$http', '$routeParams',
function($scope, $http, $routeParams) {

  // Get user profile
  $scope.getUser = function() {
    $http.get("/users/" + $routeParams.slug)
      .success(function(res) {
        $scope.user = res.data
      })
  }
  // Delete user
  $scope.deleteUser = function() {
    //
  }

  $scope.$parent.clearFix()

}])
