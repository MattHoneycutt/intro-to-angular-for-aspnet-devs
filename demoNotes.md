# Getting started with Angular
* Open layout
* Add angularjs from cdn: demo01
* Create client folder in project
* Create app.module.js file
* Add app definition: demo02
* Add run callback: demo03
* Back to layout
* Add script tag: demo04
* Add ng-app to html tag
* Add "1+1 is {{1+1}}" stuff to the index view: demo05
* Show it works

# Building a component
* In Index, replace entire p tag with table: demo06
* Replace it with zombie-incident-list component: demo07
* Add component: demo08
* Add static HTML template: demo09
* Add reference to component: demo10

# Making the component real
* Add controller and controllerAs to component definition
* Add controller definition: demo11
* Replace view to show single zombie: demo12
* Show result

# Tweaking output
* Notice how date looks bad
* Add filter to fix it: demo13
* Show what happens if you typo something

# Show list
* Go to component and drop in JS for array of zombies: demo14
* Go to view and add ng-repeat: ng-repeat="zombie in vm.zombies"
* Look at result
* Data is out of order!
* Put in date order with filter: | orderBy:'-reportedAt'

# Get data from server
* Show ApiController
* Add $http param, explain what it is doing; talk about IoC
* Add call to get data: demo15
* Explain promises, the options, etc. 
* Show result, point out how bad the UX is

# Improve the UX
* Add loading logic: put vm.isLoading = false, finally call in component.
* Add loader to view: demo16
* Add ng-if to table
* Demonstrate

# Showing details in a modal
* Add header column with &nbsp;
* Add td column: demo17
* Add ng-click attribute and explain: ng-click="vm.showDetails(zombie)"
* Add code to controller: vm.showDetails = showDetails assignment
* Drop in function: demo18
* How do we show modal?  Use ui-bootstrap
* **Back to slides**
* Reference uib on CDN: demo19
* Go to app.module.js and reference: 'ui.bootstrap'
* Add reference to $uibModal as parameter
* Drop in implementation of showDetails: demo20

# Implementing component
* Add JS component and drop in code: demo21
* Create HTML template and drop in code: demo22
* Add reference to layout: demo23
* Run it and see that we have an empty modal now

# Passing data
* Add empty controller definition: controller: function () { },
* Add resolve: 
```
	resolve: {
                    zombie: function() {
                        return zombie;
                    }
	}
```
* Update component definition to reference the zombie. zombie="$resolve.zombie"
* Go to details component, drop in code to wire it up and display zombie: demo24
* Replace view template: demo25

# Using a service
* Replace $uibModal with zombieModal in param definition
* Call zombieModal.showFor(zombie) in showDetails
* Drop in service implementation: demo26
* Add reference to service in layout: demo27

# Wire up close button
* Go to details template, put in ng-click="vm.close()"
* Go to service and add in close="$close()"
* Go to details component and add in binding: close: '&'
* Run app