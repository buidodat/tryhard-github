window.DetailController = function($scope, $http, $location, $routeParams){
    var api = "http://localhost:3000/products";
    $scope.hangs=[
        {
            id:1,
            name:"Apple"
        },
        {
            id:2,
            name:"Samsung"
        },
        {
            id:3,
            name:"Oppo"
        }
    ];
    var id = $routeParams.id;
    $scope.getData = function(){
        $http.get(`${api}/${id}`).then(res=>{
            if(res.status==200){
                $scope.input = res.data;
            }
        })
    }
    $scope.getData();
}