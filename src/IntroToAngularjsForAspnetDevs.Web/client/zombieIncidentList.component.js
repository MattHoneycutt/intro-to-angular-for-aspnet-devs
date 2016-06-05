(function (undefined) {

    angular.module('app')
        .component('zombieIncidentList', {
            templateUrl: '/client/zombieIncidentList.tmpl.html',
            controller: controller,
            controllerAs: 'vm'
        });

    function controller($http) {
        var vm = this;

        vm.isLoading = true;

        $http.get('/api/zombies')
            .then(function(resp) {
                vm.zombies = resp.data;
            })
            .finally(function() {
                vm.isLoading = false;
            });
    }
})();