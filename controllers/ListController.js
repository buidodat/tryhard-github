window.ListController = function($scope, $http, $location){
    var api = "http://localhost:3000/products";
    $scope.getData = function(){
        $http.get(api).then(res=>{
            if(res.status==200){
                $scope.products = res.data;
            }
        })
    }
    $scope.getData();
    $scope.onDetail = function(id){
        $location.path(`/detail/phone/${id}`);
    }
    $scope.onEdit = function(id){
        $location.path(`/edit/phone/${id}`);
    }
    $scope.onDelete = function(id){
        var confirm = window.confirm("Bạn có muốn xóa ?");
        if(confirm){
            $http.delete(`${api}/${id}`).then(res=>{
                if(res.status == 200){
                    alert("Xóa thành công");
                }
            })
        }
    }
}