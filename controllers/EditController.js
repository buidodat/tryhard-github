window.EditController = function($scope, $http, $location, $routeParams){
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
    $scope.onSubmit = function(){
        $scope.err={
            ten:false,
            gia:false,
            hang:false
        }
        var isValid = true;
        if(!$scope.input || !$scope.input.ten ){
            $scope.err.ten="Hãy nhập tên";
            isValid= false;
        }
        if(!$scope.input || !$scope.input.hang ){
            $scope.err.hang="Hãy nhập hãng";
            isValid= false;
        }
        if(!$scope.input || !$scope.input.gia ){
            $scope.err.gia="Hãy nhập giá";
            isValid= false;
        }else if(!Number($scope.input.gia)){
            $scope.err.gia="Giá phải là số";
            isValid= false;
        }else if($scope.input.gia <=100){
            $scope.err.gia="Giá phải > 100";
            isValid= false;
        }
        if(isValid){
            var updateP = {
                ...$scope.input
            }
            $http.put(`${api}/${id}`,updateP).then(res=>{
                if(res.status == 200){
                    alert("Cập nhật sản phẩm thành công");
                    $location.path("/list-phone")
                }
            })
        }
    }
}