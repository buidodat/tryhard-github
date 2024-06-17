angular.module('myController',['ngRoute']).config($routeProvider=>{
    $routeProvider.when("/list-phone",{
        templateUrl:"views/list.html",
        controller:ListController
    }).when("/add/phone",{
        templateUrl:"views/add.html",
        controller:AddController
    }).when("/detail/phone/:id",{
        templateUrl:"views/detail.html",
        controller:DetailController
    }).when("/edit/phone/:id",{
        templateUrl:"views/edit.html",
        controller:EditController
    })
})