var app = angular.module('myApp', ['ngAnimate']);




app.controller('helpController', ['$scope', '$http', function ($scope, $http) {
    $scope.show = false;
    $scope.help = function () {
        if ($scope.myButton) {
            $scope.show = true;
        } else($scope.close = function () {
            $scope.show = false;
        });
    }
    var weather = new XMLHttpRequest();
    weather.open("GET", "http://api.wunderground.com/api/fa5715ba5adff2ac/conditions/q/MA/Boston.json", false)
    weather.send(null);

    var r = JSON.parse(weather.response);

    var dis = "Current location: " + r.current_observation.display_location.full + "  <p>";
    var temp = r.current_observation.temperature_string + "  <p>";
    var wind = r.current_observation.wind_string + "  <p>";
    var icon = r.current_observation.icon + "  <p>";



    function getWeather(id, res) {
        document.getElementById(id).innerHTML = res;
    }
    getWeather("weather", dis);
    getWeather("temp", temp);
    getWeather("wind", wind);
    getWeather("icon", icon);

            }]);
