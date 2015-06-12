var myApp = angular.module("myApp", []);


myApp.controller("MainCtrl", function($scope) {
    $scope.userDetails = {
        name: "Евгений",
        login: "paboka"
    };
    $scope.programs = [
        { name: "CanProg", version: "1.0" },
        { name: "FmPack", version: "1.4" },
        { name: "Burner", version: "1.1" }
    ];
});