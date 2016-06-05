(function(undefined) {

    angular.module('app')
        .service('zombieModal', zombieModal);

    function zombieModal($uibModal) {
        var svc = this;

        svc.showFor = showFor;

        function showFor(zombie) {
            $uibModal.open({
                template: '<zombie-details zombie="$resolve.zombie"></zombie-details>',
                size: 'lg',
                controllerAs: 'vm',
                controller: function() {},
                resolve: {
                    zombie: function() {
                        return zombie;
                    }
                }
            });
        }
    }

})();