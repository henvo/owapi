// API Controller
app.controller('apiCtrl', ['$scope', '$filter', '$http', '$location', '$routeParams',
 function($scope, $filter, $http, $location, $routeParams) {

  // GET List of APIs
  $scope.getList = function() {
    $http.get("/apis")
      .success(function(res) {
        if(res.data.length==0) {
          $scope.$parent.warning = "There are no APIs in your basket yet! :("
        }
        else {
          $scope.apis = res.data
        }
      })
  }

  // Change status of API
  $scope.changeStatus = function(api, status) {
    var found = $filter('filter')(
      $scope.apis,
      { name: api },
      true
    )
    if (found.length) {
      found[0].status = status
      $http.put(
        "/apis/" + found[0].name,
        found[0]
      )
    }
  }
  // POST request of API to server
  $scope.postAPI = function() {
    $http.post( '/apis', $scope.api )
    .then(function(response) {
      $location.path('/apis/')
    }, function(res) {
      $scope.$parent.warning = res.data.message
    })
  }

  // POST request of API to server
  $scope.deleteAPI = function() {
    $http.delete( '/apis/' + $scope.api.name )
    .then(function(response) {
      $location.path('/apis/')
    }, function(res) {
      $scope.$parent.warning = res.data.message
    })
  }

  // POST request of API to server
  $scope.updateAPI = function() {
    $http.put( '/apis/' + $scope.api.name, $scope.api )
    .then(function(response) {
      $scope.$parent.success = "API successfully updated! :)"
    }, function(response) {
      $scope.error = response.data
    })
  }

  // GET single API
  $scope.getSingleAPI = function() {
    $http.get("/apis/" + $routeParams.slug )
      .success(function(res) {
        $scope.api = res.data
      })
  }
  // Add resource to current api (scope)
  $scope.addResourceToAPI = function(api) {
    if(!api.resources) api.resources = {}
    api.resources[$scope.newResourceName] = {}
    $scope.newResourceName = ""
  }
  // Select resource
  $scope.setSelectedResource = function(resource) {
    $scope.selectedResource = resource
    resource = ""
  }
  // Add property to resource
  $scope.addPropertyToResource = function(prop, resource) {
    $scope.api.resources[resource][prop] = "String"
    $scope.newPropertyName = ""
  }

  $scope.$parent.clearFix()

}])
