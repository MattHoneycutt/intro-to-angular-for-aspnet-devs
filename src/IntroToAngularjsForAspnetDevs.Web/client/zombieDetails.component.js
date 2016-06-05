(function(undefined) {

    angular.module('app')
        .component('zombieDetails',
        {
            templateUrl: '/client/zombieDetails.tmpl.html',
            controller: controller,
            controllerAs: 'vm',
            bindings: {
                zombie: '<'
            }
        });

    function controller() {

    }
})();