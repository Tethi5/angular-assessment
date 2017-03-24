angular.module('assessment').directive('productDir', function(){
	return {
		restrict: 'AE',
		scope: {
			data: "="
		},
templateUrl: './views/product-tmpl.html'
controller: 'productDetailsCtrl',
controllerAs: 'ctrl'
	}
})
