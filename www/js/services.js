angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])
.service('storageService',['$http',function($http){
return {
   set:function(key,value){
      return window.localStorage.setItem(key,JSON.stringify(value));
   },
   append:function(key,value){
	users=new Array();
	users.push(this.get(key));
	users.push(value);
      return window.localStorage.setItem(key,JSON.stringify(users));
   },
   get:function(key){
     return JSON.parse(window.localStorage.getItem(key));
   },
   getJson:function(key){
     return window.localStorage.getItem(key);
   },
   destroy:function(key){
     return window.localStorage.removeItem(key);
   },
 };
}])
.service('BlankService', [function(){

}]);
