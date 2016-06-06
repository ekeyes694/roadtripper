var app = angular.module('myApp', [])

app.controller('helpController', function ($scope) {
    $scope.show = false;
    $scope.help = function () {
        if ($scope.myButton) {
            $scope.show = true;
        } else($scope.close = function () {
            $scope.show = false;
        });
    }
});
