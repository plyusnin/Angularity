var myApp = angular.module("myApp", ["ngCookies"]);


myApp.controller("MainCtrl", function ($scope, $cookies) {
    var versions = $cookies.getObject("lastSeenVersion");
    var compareVersions = function (v1, v2) {
        if (v1.major > v2.major) return 1;
        if (v1.major < v2.major) return -1;
        if (v1.minor > v2.minor) return 1;
        if (v1.minor < v2.minor) return -1;
        return 0;
    }

    $scope.userDetails = {
        name: "Евгений",
        login: "paboka"
    };
    $scope.programs = [
        { name: "CanProg", version: { major: 0, minor: 9 }, description: "Программа для внутрисистемной прошивки ячеек комплекса БЛОК по CAN-линии." },
        { name: "FmPack", version: { major: 1, minor: 4 }, description: "Программа для создания sfp-файлов с прошивками." },
        { name: "Burner", version: { major: 1, minor: 1 }, description: "Программа для первичной прошивки ячеек комплекса БЛОК." }
    ];
    $scope.selectedProgram = $scope.programs[0];
    $scope.selectProgram = function (program) {
        $scope.selectedProgram = program;
        if (versions == undefined)
            versions = {};
        versions[program.name] = program.version;
        $cookies.putObject("lastSeenVersion", versions);
    };
    $scope.isNewVersion = function (programName, version) {
        if (versions == undefined)
            return true;
        if (versions[programName] == undefined)
            return true;
        return compareVersions(version, versions[programName]) > 0;
    }

});