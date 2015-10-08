// User Controller
app.controller('userCtrl', ['$scope', '$http', '$routeParams', '$window',
function($scope, $http, $routeParams, $window) {

  // Get user profile
  $scope.getUser = function() {
    $http.get("/users/" + $routeParams.slug)
      .success(function(res) {
        $scope.user = res.data
      })
  }
  // Delete user
  $scope.deleteUser = function() {
    $http.delete("/users/" + $routeParams.slug)
      .success(function(res) {
      // Redirect
        $window.location.href="/logout"
      })
  }

  $scope.$parent.clearFix()

}])
