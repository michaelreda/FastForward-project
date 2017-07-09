angular.module('app.controllers', [])

.controller('loginCtrl', ['$scope', '$stateParams','storageService','$state',function ($scope, $stateParams,storageService,$state) {
	$scope.login = function(username,password){
		storageService.set("users",{"username":"admin","password":"123"});
		//console.log(storageService.get("users"));
//console.log(storageService.getJson("users"));
		if(!window.localStorage['users']){
			storageService.set("users",{"username":"admin","password":"123"});
		}else{
			users= storageService.get('users');

				if(users.username.toUpperCase()==username.toUpperCase()&&users.password==password){
					$state.go('careers');
				}else{
					$scope.loginFailed=true;
				}

			//storageService.append("users",{"username":username,"password":password});
	//console.log(storageService.getJson("users"));
		}
	}

}])

.controller('careersCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('universitiesCareersCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.universities=[{
			"name":"Ain Sokhna University",
												"price":"55000",
			"region":"Ain Sokhna",
			"status":"Awaiting Email Reply"
		},
		{
			"name":"New Cairo University",
												"price":"40000",
			"region":"fifth settlement",
			"status":"pending test result"
		},
		{
			"name":"Public University",
												"price":"5000",
			"region":"Nasr City",
			"status":"no status"
		},
		{
			"name":"Helwan University",
												"price":"2000",
			"region":"Helwan",
			"status":"Deadline Today!"
		},
		{
			"name":"Private University",
												"price":"82000",
			"region":"New Cairo",
			"status":"deadline soon"
		}];

}])

.controller('careerCompaniesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.companies=[{
		"name":"Big data Company",
		"price":"75",
		"date":"22ND Feb 2016",
		"status":"pending",
		"size":"corporate",
		"type":""
	},
	{
		"name":"Embedded systems Company",
		"price":"50",
		"date":"22ND Mar 2016",
		"status":"no status",
		"size":"corporate",
		"type":"embedded_systems"
	},
	{
		"name":"Cloud-based SME",
		"price":"0",
		"date":"22ND APR 2016",
		"status":"applied",
		"size":"corporate",
		"type":"cloud"
	},
	{
		"name":"Security Company",
		"price":"100",
		"date":"22ND MAY 2016",
		"status":"pending",
		"size":"small/medium",
		"type":"security"
	},
	{
		"name":"Ios development INC",
		"price":"100",
		"date":"22ND Jun 2016",
		"status":"deadline missed",
		"size":"small/medium",
		"type":"mobile"
	}];


}])

.controller('universitiesFiltersCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('companiesFiltersCtrl', ['$scope','$rootScope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope,$rootScope, $stateParams) {
			$rootScope.small_medium=false;
			$rootScope.corporate=false;
			$scope.small_medium_click=  function(){
				// console.log("hi");
				$rootScope.small_medium=true;
				document.getElementById("companiesFilters-button34").style.backgroundColor = "#ef473a";
				document.getElementById("companiesFilters-button34").style.color = "white";
				document.getElementById("companiesFilters-button35").style.backgroundColor = "white";
				document.getElementById("companiesFilters-button35").style.color = "#ef473a";
			}
			$scope.corporate_click=  function(){
				// console.log("hi");
				$rootScope.corporate=true;
				document.getElementById("companiesFilters-button35").style.backgroundColor = "#ef473a";
				document.getElementById("companiesFilters-button35").style.color = "white";
				document.getElementById("companiesFilters-button34").style.backgroundColor = "white";
				document.getElementById("companiesFilters-button34").style.color = "#ef473a";
			}

			$rootScope.classification=[];
			$scope.new_classification=  function(){
				$rootScope.classification=$scope.classification;
				alert("classification");
			}

			$scope.max_price_change=  function(max_price){
				$rootScope.max_price=max_price;
			}


}])
