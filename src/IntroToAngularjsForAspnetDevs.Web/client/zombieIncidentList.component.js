(function (undefined) {

    angular.module('app')
        .component('zombieIncidentList', {
            templateUrl: '/client/zombieIncidentList.tmpl.html',
            controller: controller,
            controllerAs: 'vm'
        });

    function controller($http, zombieModal) {
        var vm = this;

        vm.isLoading = true;
        vm.showDetails = showDetails;

        $http.get('/api/zombies')
            .then(function(resp) {
                vm.zombies = resp.data;
            })
            .finally(function() {
                vm.isLoading = false;
            });

        function showDetails(zombie) {

            zombieModal.showFor(zombie);
        }
    }
})();