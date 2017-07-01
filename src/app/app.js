var app = angular.module('credit',[]);




app.controller('firstStep', function($scope,$http){
  this.user = {}
  this.task = {}
  $http.get('example.json')
         .then(function(res){
            $scope.example = res.data;
          });

  this.postDate = function(product) {
    this.user.put(this.task)
  }

});

app.controller('ThirdStep', function($scope,$http){
  $http.get('todos.json')
         .then(function(res){
            $scope.todos = res.data;
          });
});
