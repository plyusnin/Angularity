var myApp = angular.module("myApp", []);


myApp.controller("MainCtrl", function($scope) {
    $scope.userDetails = {
        name: "Евгений",
        login: "paboka"
    };
});