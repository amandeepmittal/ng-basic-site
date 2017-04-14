angular.module('ngBasic', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/home.html',
        controller: 'HomeController'
      })
      .when('/about', {
        templateUrl: 'app/views/about.html',
        controller: 'AboutController'
      })
      .otherwise({redirectTo: '/'})
  }])
  // .controller('HomeController',function($scope) {
  //   $scope.text = 'Ng-Basic Site Template'
  // })
  .controller('HomeController', [ '$scope', function ($scope) {
    $scope.text = 'Ng-Basic Site Template'
  }])
  .controller('AboutController', ['$scope', '$http', function ($scope, $http) {
    $http.get('app/services.json')
      .then(function (response) {
        $scope.services = response.data
      })
  }])