(function (undefined) {

    angular.module('app')

        .component('zombieDetails', {
            templateUrl: '/client/zombieDetails.tmpl.html',
            controllerAs: 'vm',
            controller: controller,
            bindings: {
                zombie: '<',
                close: '&'
            }
        });
    
    function controller() {
        var vm = this;
    }
})();