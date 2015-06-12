var myApp = angular.module("myApp", []);


myApp.controller("MainCtrl", function($scope) {
    $scope.userDetails = {
        name: "Евгений",
        login: "paboka"
    };
    $scope.programs = [
        { name: "CanProg", version: "1.0", description: "Программа для внутрисистемной прошивки ячеек комплекса БЛОК по CAN-линии." },
        { name: "FmPack", version: "1.4", description: "Программа для создания sfp-файлов с прошивками." },
        { name: "Burner", version: "1.1", description: "Программа для первичной прошивки ячеек комплекса БЛОК." }
    ];
    $scope.selectedProgram = $scope.programs[0];
    $scope.selectProgram = function (program) {
        $scope.selectedProgram = program;
    };
});