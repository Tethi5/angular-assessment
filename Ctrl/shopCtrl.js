angular.module('assessment').controller('shopCtrl', function($scope, shopService, $stateParams){

  	shopService.getProducts().then(function(response){
			$scope.products = response;
      
		})




});
