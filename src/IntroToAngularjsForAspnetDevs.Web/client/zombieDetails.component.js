(function (undefined) {

    angular.module('app')

        .component('zombieDetails', {
            templateUrl: '/client/zombieDetails.tmpl.html',
            controllerAs: 'vm',
            controller: controller,
            bindings: {
                 zombie: '<'
            }
        });
    
    function controller() {
        var vm = this;
        console.log(vm);
    }
})();