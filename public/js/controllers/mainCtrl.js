// Main Controller
app.controller('mainCtrl', ['$scope', function($scope) {

  $scope.clearFix = function() {
    $scope.warning = null
    $scope.error = null
    $scope.success = null
  }

  $scope.clearFix()

}])
