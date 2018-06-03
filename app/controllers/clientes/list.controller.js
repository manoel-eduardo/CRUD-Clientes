angular.module("myApp").controller('ClientesListController', ['$scope', 'store', 'NgTableParams', '$location', '$window', function ($scope, store, NgTableParams, $location, $window) {
    $scope.tableParams = new NgTableParams({
        page: 1, // show first page
        count: 10 // count per page
     }, {
        filterDelay: 0,
        dataset: store.get("clientes")
    });

    $scope.excluir = function(id){
        var clientes = store.get('clientes');
        clientes.splice(id, 1);
        store.set('clientes', clientes);
        $scope.tableParams.reload();
    };

    $scope.editar = function(id){
        $location.path( "/form/"+id );
    }

    $scope.gerarAleatorio = function(){
        var nomes = [ 'Alice', 'Miguel', 'Sophia', 'Arthur', 'Helena', 'Bernardo', 'Valentina', 'Heitor'];
        var sobrenomes = [ 'Adams', 'Allen', 'Armstrong', 'Arnold', 'Bailey', 'Banks', 'Barker', 'Barnett', 'Black', 'Brown', 'Bryant', 'Bush', 'Byrd', 'Campbell', 'Carter', 'Castillo', 'Castro', 'Clark', 'Cooper', 'Davis', 'Day', 'Dean', 'Dennis', 'Diaz', 'Dixon', 'Douglas', 'Duncan', 'Elliott', 'Evans'];
        var cpfs = ['44273073021', '93398275036', '46586122082', '06719787055', '79181147015'];
        var datasNascimentos = ['01/01/1911', '02/02/1922', '03/03/1933', '04/04/1944', '05/05/1995'];

        var clientes = store.get('clientes');
        if(clientes == null){
            clientes = [];
        }

        for(var i = 0; i < 30; i++){
            var n = Math.floor((Math.random() * 7));
            var s = Math.floor((Math.random() * 28));
            var c = Math.floor((Math.random() * 4));
            var d = Math.floor((Math.random() * 4));

            var currentdate = new Date(); 
            var datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() + " @ "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds();

            clientes.push({
                "nome": nomes[n]+" "+sobrenomes[s],
                "cpf": cpfs[c],
                "dtNascimento": datasNascimentos[d],
                "insertedAt": datetime,
                "telefones": [{}, {}]
            });
        }
        store.set('clientes', clientes);
        
        $scope.tableParams.reload();
        $window.location.reload();
    }
}]);