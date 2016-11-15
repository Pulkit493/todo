/**
 * Created by rahul on 11-06-2016.
 */

var app=angular.module("myApp",[]);
app.controller("myController",function($scope,$http){
    $scope.formData={};
    $scope.createTodo = function() { debugger;
        $http.post('/api/task', $scope.formData)
            .success(function(data) {
                $scope.todos.push({task: $scope.formData.text});
                $scope.formData = {};
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $http.get('/api/task')
        .success(function(data) {debugger;
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.deleteTodo = function(id) {
        $http.delete('/api/task/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

});