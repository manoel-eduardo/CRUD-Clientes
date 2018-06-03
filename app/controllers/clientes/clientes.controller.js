angular.module("myApp").controller('ClientesController', ['$scope', function ($scope) {
    $scope.cliente = {
        "nome": '',
        "cpf": '',
        "dtNascimento": '',
        "insertedAt": '',
        "telefones": [{}, {}]
    };

    $scope.addTelefone = function(){
        $scope.cliente.telefones.push({});
    }

    $scope.removerTelefone = function(key){
        $scope.cliente.telefones.splice(key, 1);
    }

    $scope.salvar = function(){
        console.log($scope.cliente);
    };
}]);