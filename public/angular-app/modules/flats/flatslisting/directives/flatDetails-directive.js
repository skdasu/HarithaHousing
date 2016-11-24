// find the already delcared module and tag the directive
angular.module('harithaHousing').
directive('flatDetails', ['$state', '$rootScope', function($state, $rootScope) {

    var linkFunction = function($scope, elem, attrs) {
        //console.log($scope.salesdetailsdata);
        $scope.flatsDetailsData = JSON.parse($scope.flatsdetailsdata);
        $scope.flatsDetails = $scope.flatsDetailsData;
        $scope.testmsg = "test1234"
    };

    return {
        // can be used as attribute or element
        restrict: 'AE',
        templateUrl: "angular-app/modules/flats/flatslisting/directives/flatDetails-template.html",
        link: linkFunction,
        scope: {
            flatsdetailsdata: "="
        }
    };
}]);



/*
// find the already delcared module and tag the directive
angular.module('harithaHousing').
directive('flatDetails', function() {

    var linkFunction = function($scope, elem, attrs) {
        // pre: function(scope, elem, attr) {
        //     console.log("pre linkFunction");
        //
        // };
        // post: function(scope, elem, attr) {
        //     console.log("post linkFunction");
        // };
        console.log("linkFunction");
        $scope.flatsDetailsData = JSON.parse($scope.flatsdetailsdata);
        $scope.flatsDetails = $scope.flatsDetailsData;
    };

    var controllerFunction = function(scope) {
        console.log("controllerFunction");
        $scope.flatsDetailsData = JSON.parse($scope.flatsdetailsdata);
        $scope.flatsDetails = $scope.flatsDetailsData;
};

// var prelinkFunc = function(scope, elem, attr) {
//     console.log("pre linkFunction");
// };
//
// var postlinkFunc = function(scope, elem, attr) {
//     console.log("post linkFunction");
// };

return {
    // can be used as attribute or element
    restrict: 'AE',
    templateUrl: "angular-app/modules/flats/flatslisting/directives/flatDetails-template.html",
    link: linkFunction,
    controller: controllerFunction,
    scope: {
        flatsdetailsdata: "@"
    }
};
}); */
