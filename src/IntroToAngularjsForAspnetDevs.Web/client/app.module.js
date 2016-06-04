(function (undefined) {

    angular.module('app', [
        //list modules to include here. 
        'ui.bootstrap'
    ]).run(function() {
        console.log('I am running!');
    });

})();