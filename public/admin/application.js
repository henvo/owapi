var mainApplicationModuleName = 'admin'
  , mainApplicationModule = angular.module(mainApplicationModuleName, ['api'])

angular.element(document).ready(function() {
  angular.bootstrap(document, [mainApplicationModuleName])
})
