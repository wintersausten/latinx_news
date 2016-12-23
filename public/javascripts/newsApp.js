var newsApp = angular.module('newsApp',['ngRoute']);

newsApp.config(function($routeProvider){
  $routeProvider
    // mainController
    .when('/',{
      templateUrl: 'main.html',
      controller: 'mainController'
    })
    // newsController
    .when('/news',{
      templateUrl: 'news.html',
      controller: 'newsController'
    });
});

newsApp.controller('mainController', function($scope){
  $scope.message = "News site that aggregates news from Latin American countries. Contributors: Austen, Joe, Navid, Sailesh";
});

newsApp.controller('newsController', function($scope, $http){
  $http.get('/news/').success(function(data){
    $scope.data = data;
  })
});

