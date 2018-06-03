angular.module("myApp").controller('ClientesController', ['$scope', function ($scope) {
    $scope.cliente = {
        "nome": '',
        "cpf": ''
    };

}]);