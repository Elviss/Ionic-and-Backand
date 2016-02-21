angular.module('starter.controllers', ['ionic'])

    .controller('AppCtrl', function($scope, TodoService) {
        $scope.todos = [];
        $scope.input = {};

        function getAllTodos() {
            TodoService.getTodos()
                .then(function (result) {
                    $scope.todos = result.data.data;
                });
        }

        $scope.addTodo = function() {
            TodoService.addTodo($scope.input)
                .then(function(result) {
                    $scope.input = {};
                    // Reload our todos, not super cool
                    getAllTodos();
                });
        };

        $scope.deleteTodo = function(id) {
            TodoService.deleteTodo(id)
                .then(function (result) {
                    // Reload our todos, not super cool
                    getAllTodos();
                });
        };

        getAllTodos();
    });