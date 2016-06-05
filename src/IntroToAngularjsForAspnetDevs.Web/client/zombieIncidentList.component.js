(function (undefined) {

    angular.module('app')
        .component('zombieIncidentList', {
            templateUrl: '/client/zombieIncidentList.tmpl.html',
            controller: controller,
            controllerAs: 'vm'
        });

    function controller() {
        var vm = this;

        vm.zombies = [
            {
                "id": "d3c6c8fe-2e80-4334-b91b-1975d9642d76",
                "location": "2206 Ruskin Alley",
                "incidentType": "largeSwarm",
                "reportedBy": "Elizabeth Lee",
                "reportedAt": "2016-06-08T01:13:16Z"
            }, {
                "id": "28ea7ca7-9b91-4d9f-a576-f115ea59e867",
                "location": "96107 Northfield Junction",
                "incidentType": "infected",
                "reportedBy": "Raymond Reynolds",
                "reportedAt": "2016-06-09T08:31:24Z"
            }, {
                "id": "d082fbb6-a6b1-46e5-bb1e-87c70783375e",
                "location": "5953 Sycamore Trail",
                "incidentType": "smallSwarm",
                "reportedBy": "Rebecca Phillips",
                "reportedAt": "2016-06-08T00:19:53Z"
            }, {
                "id": "1d6c276e-a268-4a73-acd6-3afa53ed9f3a",
                "location": "6 Jana Circle",
                "incidentType": "largeSwarm",
                "reportedBy": "Doris Clark",
                "reportedAt": "2016-06-09T22:59:02Z"
            }, {
                "id": "1a4c74be-59af-45fb-ab1c-4026e4ffc3d9",
                "location": "632 Rockefeller Park",
                "incidentType": "largeSwarm",
                "reportedBy": "Catherine Ryan",
                "reportedAt": "2016-06-08T09:49:15Z"
            }, {
                "id": "242783b4-5a09-4d4f-99a2-892d12e8e866",
                "location": "632 Everett Park",
                "incidentType": "smallSwarm",
                "reportedBy": "Theresa Lane",
                "reportedAt": "2016-06-09T08:52:37Z"
            }, {
                "id": "b571f316-9b3f-4a6c-8986-0808c19965aa",
                "location": "20210 Macpherson Street",
                "incidentType": "smallSwarm",
                "reportedBy": "Todd Foster",
                "reportedAt": "2016-06-08T06:25:21Z"
            }, {
                "id": "107c50ff-665c-4611-a910-3ed8a4eda5a3",
                "location": "816 Barby Terrace",
                "incidentType": "smallSwarm",
                "reportedBy": "Scott Gomez",
                "reportedAt": "2016-06-09T17:03:59Z"
            }, {
                "id": "ed02cb72-9d63-4a6b-a12a-2ac4f9be6294",
                "location": "8091 Service Terrace",
                "incidentType": "single",
                "reportedBy": "Joyce Thomas",
                "reportedAt": "2016-06-08T13:49:18Z"
            }, {
                "id": "7972bad2-4543-4f6f-a690-158db1bb7ef4",
                "location": "3366 John Wall Street",
                "incidentType": "smallSwarm",
                "reportedBy": "Jesse Franklin",
                "reportedAt": "2016-06-09T04:44:49Z"
            }, {
                "id": "b6cef47a-33ef-473e-b562-f2a8cbf23760",
                "location": "753 Pepper Wood Trail",
                "incidentType": "infected",
                "reportedBy": "Thomas Sanchez",
                "reportedAt": "2016-06-08T11:47:47Z"
            }, {
                "id": "66abf360-6c82-4d0b-9e70-947317adfb85",
                "location": "0 Reindahl Junction",
                "incidentType": "herd",
                "reportedBy": "Stephanie Harris",
                "reportedAt": "2016-06-09T12:15:47Z"
            }
        ];
    }
})();