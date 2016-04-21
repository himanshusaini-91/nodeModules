/**
 * Created by tanvirsaini32 on 21/04/2016.
 */
var app=angular.module("pro",['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/Mobile', {
            templateUrl:'../../../createServer/miniapp/view/mobile.html',
            controller:'ctrl1'
        }).when('/Tablet', {
            templateUrl:'../../../createServer/miniapp/view/tablet.html',
            controller:'ctrl1'
        }).when('/Clothes', {
            templateUrl:'../../../createServer/miniapp/view/clothes.html',
            controller:'ctrl1'
        })

        .otherwise({
            redirectTo: '/'
        });

});