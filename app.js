var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/map', {
            templateUrl: 'partials/map.html',
            controller: 'mapController'
        })
        .when('/saved-trips', {
            templateUrl: 'partials/saved-trips.html',
            controller: 'tripsController'

        })
        .otherwise({
            redirectTo: '/map'
        });
}]);
