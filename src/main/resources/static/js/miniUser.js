var miniUser = angular.module('miniUser', []);


miniUser.controller('UserController', ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {

    $scope.removeUser = function (user) {
        $http.post("/delete/" + user.id)
            .then(function () {
                $scope.showMessage("Deleted user");
                $scope.getList();
            }, function errorCallback(response) {
                $scope.showMessage("Can't connect to database");
            });
    };

    $scope.addUser = function () {
        $.post("/save-user", {"name": $scope.name, "email": $scope.email})
            .then(function successCallback(response) {
                $scope.showMessage("Saved user to database");
                $scope.getList();
            }, function errorCallback(response) {
                $scope.showMessage("Can't connect to database");
            });
        $scope.name = '';
        $scope.email = '';
    };

    $scope.checkEmail = function () {
        $http.post("/user-by-email", $scope.email)
            .then(function successCallback(response) {
                if (response["data"] == null) {
                    $scope.addUser()
                } else {
                    $scope.email = '';
                    $scope.showMessage("Invalid email");
                }
            }, function errorCallback(response) {
                $scope.showMessage("Can't connect to database");
            })
    }

    $scope.getList = function () {
        $http.get("/users")
            .then(function successCallback(users) {
                $scope.users = users.data;
            }, function errorCallback(response) {
                $scope.showMessage("Can't connect to database");
            });
    };

    $scope.showMessage = function (message) {
        $scope.message = message;
        $timeout(function () {
            $scope.message = "";
        }, 3000)
    };

    $scope.getList();
}]);

