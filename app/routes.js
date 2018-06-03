angular.module("myApp").config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "clientes/list.html",
        controller: 'ClientesListController'
    })
    .when("/list", {
        templateUrl : "clientes/list.html",
        controller: 'ClientesListController'
    })
    .when("/form", {
        templateUrl : "clientes/form.html",
        controller: 'ClientesFormController'
    })
    .when("/form/:id", {
        templateUrl : "clientes/form.html",
        controller: 'ClientesFormController'
    })
}]);