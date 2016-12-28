var app = angular.module('newsApp',['ngRoute', 'ngResource']);

app.run(function($rootScope){
  $rootScope.accessors = {
    getId: function(row) {
      return row._id;
    }
  }
});

app.config(function($routeProvider){
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
    })
    .when('/news/:id',{
      templateUrl: 'article.html',
      controller: 'articleController'
    });
});

app.controller('mainController', function($scope){
  $scope.message = "News site that aggregates news from Latin American countries. Contributors: Austen, Joe, Navid, Sailesh";
});

app.factory('newsService', function($resource){
  return $resource('/news/:id');
});

app.controller('newsController', function($scope, $http){
  $http.get('/news').success(function(data){
    $scope.data = data;
  });
});

app.controller('articleController', function($scope, $routeParams, newsService){
  $scope.article = newsService.get({id: $routeParams.id});
})

