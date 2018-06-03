angular.module("myApp").config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "clientes/list.html"
    })
    .when("/list", {
        templateUrl : "clientes/list.html"
    })
    .when("/form", {
        templateUrl : "clientes/form.html",
        controller: 'ClientesController'
    })
}]);