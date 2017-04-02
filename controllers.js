'use strict';

angular.module('toBuyApp.controller', [])
    .controller('toBuyController', ["$scope", function($scope) {
        $scope.newTask = "";
        $scope.taskList = [{
                description: "Quinoa",
                done: false
            },
            {
                description: "Blueberries",
                done: false
            },
            {
                description: "Broccoli",
                done: false
            }
        ];
        $scope.addToBuy = function() {
            $scope.taskList.push({
                    description: $scope.newTask,
                    done: false
                }),
                $scope.newTask = "";
        };
        $scope.deleteToBuy = function(index) {
            $scope.taskList.splice(index, 1);
        };
    }]);
