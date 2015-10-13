var snsApp =  angular.module('snsApp',['ngAnimate']);

snsApp.controller('snsController', ['$scope', function($scope){
	//primary controller for main page
	// $scope.theGameVis = false;
	// $scope.theWorldVis = false;
	// $scope.aboutVis = false;
	// $scope.downloadsVis = false;

	$scope.toggleVis = function(navElement){

		switch (navElement){
			case "theGame":
				if ($scope.theGameVis === true){
					$scope.theGameVis = false;
				} else{
					$scope.theGameVis = true;
				}
				$scope.theWorldVis = false;
				$scope.aboutVis = false;
				$scope.downloadsVis = false;
			   break;
			case "theWorld":
				if ($scope.theWorldVis === true){
					$scope.theWorldVis = false;
				} else{
					$scope.theWorldVis = true;
				}
			   $scope.theGameVis = false;
			   $scope.aboutVis = false;
			   $scope.downloadsVis = false;
			   break;
			case "about":
			if ($scope.aboutVis === true){
				$scope.aboutVis = false;
			} else{
				$scope.aboutVis = true;
			}
			   $scope.theGameVis = false;
			   $scope.theWorldVis = false;
			   $scope.downloadsVis = false;   
			   break;
			case "download":
			if ($scope.downloadsVis === true){
				$scope.downloadsVis = false;
			} else{
				$scope.downloadsVis = true;
			}
			    $scope.theGameVis = false;
			    $scope.theWorldVis = false;
			    $scope.aboutVis = false; 
				break;
		}
	};
}]);

// snsApp.controller('snsNav', ['$scope', function($scope){
	//controller for navigation

// }]);


// angular.module('snsApp',['ngAnimate'])
// 	.controller('snsController', function($http){
// 		var snsItem = this; // scope controlled variable
		
// 	});//end controller

// 1) click a nav element 
// 2) hide all previous elements
// 3) display the ul that corresponds to that eleement
