simpleApp.factory('entreprisesFactory', function ($http) {
    return {
        getEntreprises: function () {
            return $http({
                method: 'GET',
                url: 'http://localhost:8080/entreprises'
            })
        },
        getEntreprisesName: function () {
            return $http({
                method: 'GET',
                url: 'http://localhost:8080/entreprises/?fields=nomcomplet'
            })
        }
    }
})
