var platform= angular.module("OnlineTestPlatform",[]);

platform.factory('storageService', ['$rootScope', function($rootScope) {

    return {
        get: function(key) {
            return localStorage.getItem(key);
        },
        set: function(key, data) {
            localStorage.setItem(key, data);
        }
    };
}]);


$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})
