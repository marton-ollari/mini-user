var miniUser = angular.module('miniUser', ['ngRoute']);

// miniUser.config(['$routeProvider', function ($routeProvider) {
//     $routeProvider
//         .when("/home", { templateUrl : "views/main.html"})
//         .when("/list", { templateUrl : "views/list.html"})
//         .otherwise({redirectTo: "/home"})
// }]);

miniUser.controller('UserController', ['$scope', '$http', function ($scope, $http) {
    $scope.count = 41;

    $scope.removeUser = function (user) {
        var removedUser = $scope.users.indexOf(user);
        $scope.users.splice(removedUser, 1);
        
    };

    $scope.addUser = function () {
        $scope.users.push({"id":$scope.count,"name":$scope.name,"email":$scope.email});
        $scope.count += 1;
        $scope.name = '';
        $scope.email = '';
    };

    $scope.users = [
        {"id":1,"name":"Arlinda Aman","email":"arlinda@aman.com"},
        {"id":2,"name":"Polly Pinkerton","email":"polly@pinkerton.com"},
        {"id":3,"name":"Audrea Anderson","email":"audrea@anderson.com"},
        {"id":4,"name":"Kacie Kirtley","email":"kacie@kirtley.com"},
        {"id":5,"name":"Renda Rado","email":"renda@rado.com"},
        {"id":6,"name":"Mariana Miguez","email":"mariana@miguez.com"},
        {"id":7,"name":"Nguyet Naccarato","email":"nguyet@naccarato.com"},
        {"id":8,"name":"Earnestine Eisele","email":"earnestine@eisele.com"},
        {"id":9,"name":"Hortensia Harshaw","email":"hortensia@harshaw.com"},
        {"id":10,"name":"Nettie Nero","email":"nettie@nero.com"},
        {"id":11,"name":"Tana Tibbetts","email":"tana@tibbetts.com"},
        {"id":12,"name":"Edris Elsea","email":"edris@elsea.com"},
        {"id":13,"name":"Brandee Budde","email":"brandee@budde.com"},
        {"id":14,"name":"Linh Leaks","email":"linh@leaks.com"},
        {"id":15,"name":"Shu Simeon","email":"shu@simeon.com"},
        {"id":16,"name":"Antonette Almodovar","email":"antonette@almodovar.com"},
        {"id":17,"name":"Carylon Cannon","email":"carylon@cannon.com"},
        {"id":18,"name":"Lai Lipford","email":"lai@lipford.com"},
        {"id":19,"name":"Deloris Dicks","email":"deloris@dicks.com"},
        {"id":20,"name":"Opal Ocegueda","email":"opal@ocegueda.com"},
        {"id":21,"name":"Mathew Mcninch","email":"mathew@mcninch.com"},
        {"id":22,"name":"Trinidad Tyler","email":"trinidad@tyler.com"},
        {"id":23,"name":"Miguel Mayville","email":"miguel@mayville.com"},
        {"id":24,"name":"Zachariah Zeck","email":"zachariah@zeck.com"},
        {"id":25,"name":"Trey Trudell","email":"trey@trudell.com"},
        {"id":26,"name":"Darrel Drakes","email":"darrel@drakes.com"},
        {"id":27,"name":"Benton Benigno","email":"benton@benigno.com"},
        {"id":28,"name":"Stanley Sheckler","email":"stanley@sheckler.com"},
        {"id":29,"name":"Fermin Fenn","email":"fermin@fenn.com"},
        {"id":30,"name":"Herman Hayslip","email":"herman@hayslip.com"},
        {"id":31,"name":"Lamont Lyon","email":"lamont@lyon.com"},
        {"id":32,"name":"Sean Sane","email":"sean@sane.com"},
        {"id":33,"name":"Carmelo Calfee","email":"carmelo@calfee.com"},
        {"id":34,"name":"Quintin Quarles","email":"quintin@quarles.com"},
        {"id":35,"name":"Ian Ivy","email":"ian@ivy.com"},
        {"id":36,"name":"Fidel Felipe","email":"fidel@felipe.com"},
        {"id":37,"name":"Demarcus Danziger","email":"demarcus@danziger.com"},
        {"id":38,"name":"Samual Stansel","email":"samual@stansel.com"},
        {"id":39,"name":"Silas Spurlock","email":"silas@spurlock.com"},
        {"id":40,"name":"Neil Nida","email":"neil@nida.com"}]
}]);