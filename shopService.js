angular.module('assessment').service('shopService', function($http) {
    this.getProducts = function() {
        return $http({
            url: 'http://practiceapi.devmounta.in/products',
            method: 'GET'
        }).then(function(response) {
            return response.data;
        })

}

        this.getDetails = function(id) {
            return $http({
                url: 'http://practiceapi.devmounta.in/products/' + id,
                method: 'GET'
            }).then(function(response) {
              console.log(response.data)
                return response.data;
            })
        }

})
