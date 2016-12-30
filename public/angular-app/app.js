angular.module('harithaHousing', ["ui.router"])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/apartmentblocks")
        $stateProvider
            .state('apartments', {
                url: "/apartments",
                abstract: true,
                template: '<div class="box box-default" ui-view></div>'
                    // controller: 'MasterLayoutController'
            })
            .state('apartmentsblocks', {
                url: '/apartmentblocks',
                templateUrl: 'angular-app/modules/flats/blocks/blocks.html',
                controller: 'BlocksListingController'

            })
            .state('apartmentsflatsListing', {
                url: '/apartmentsFlatsListing',
                params: {
                    'blockSelected': '',
                    'blockNumber': '',
                },
                templateUrl: 'angular-app/modules/flats/flatslisting/flats.html',
                controller: 'FlatsListingController'

            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'angular-app/modules/dashboard/dashboard.html',
                controller: 'DashboardController'

            });
    }]);
