(function (undefined) {

    angular.module('app')
        .component('zombieIncidentList', {
            templateUrl: '/client/zombieIncidentList.tmpl.html',
            controller: controller,
            controllerAs: 'vm'
        });

    function controller() {
        var vm = this;

        vm.zombie = {
            location: '327 Springs Road',
            incidentType: 'smallSwarm',
            reportedBy: 'Frances Moreno',
            reportedAt: '2015-09-12T20:26:14Z'
        };
    }
})();