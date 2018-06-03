angular.module("myApp").controller('ClientesFormController', ['$scope', 'store', '$location', function ($scope, store, $location) {
    $scope.formClass = 'needs-validation';
    $scope.cpfClass = "form-control";
    $scope.dtNascimentoClass = "form-control";

    $scope.error = {
        'cpf': false,
        'dtNascimento': false
    };

    $scope.cliente = {
        "nome": 'Eduardo',
        "cpf": '10984377646',
        "dtNascimento": '22/01/1993',
        "insertedAt": '',
        "telefones": [{}, {}]
    };

    $scope.addTelefone = function(){
        $scope.cliente.telefones.push({});
    }

    $scope.removerTelefone = function(key){
        $scope.cliente.telefones.splice(key, 1);
    }

    $scope.salvar = function(form){
        var valid = true;
        $scope.formClass = 'was-validated';
        
        if(form.$error.cpf && form.cpf.$$rawModelValue.length > 0){
            valid = false;
            $scope.error.cpf = true;
            $scope.cpfClass = "form-control border border-danger";
        } else {
            $scope.error.cpf = false;
            $scope.cpfClass = "form-control";
        }

        if(form.dtNascimento.$$rawModelValue.length == 10) {
            var dia = form.dtNascimento.$$rawModelValue.substr(0, 2);
            var mes = form.dtNascimento.$$rawModelValue.substr(3, 2);
            var ano = form.dtNascimento.$$rawModelValue.substr(6, 4);
            var dataNasc = new Date(ano+'-'+mes+'-'+dia);
            
            var ageDifMs = Date.now() - dataNasc.getTime();
            var ageDate = new Date(ageDifMs); // miliseconds from epoch
            var age = Math.abs(ageDate.getUTCFullYear() - 1970);
            
            if(age < 18){
                valid = false;
                $scope.error.dtNascimento = true;
                $scope.dtNascimentoClass = "form-control border border-danger";
            } else {
                $scope.error.dtNascimento = false;
                $scope.dtNascimentoClass = "form-control";
            }
        }

        if(form.nome.$$rawModelValue.length == 0){
            valid = false;
        }

        if(valid){
            var currentdate = new Date(); 
            var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
                
            $scope.cliente.insertedAt = datetime;

            var clientes = store.get('clientes');
            if(clientes == null){
                clientes = [];
            }
            clientes.push($scope.cliente);
            store.set('clientes', clientes);
            alert('Salvo com sucesso!');

            $location.path( "/list" );
        }
    };
}]);