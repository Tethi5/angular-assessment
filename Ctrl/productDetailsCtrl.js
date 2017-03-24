angular.module('assessment').controller('productDetailsCtrl', function($scope, shopService, $stateParams){
	shopService.getDetails($stateParams.id).then(function(response){

			$scope.product = response;

})
});
