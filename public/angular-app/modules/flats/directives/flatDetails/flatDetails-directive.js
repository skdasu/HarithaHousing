angular.module('harithaHousing').
directive('flatDetails', function() {

    var linkFunction = function(scope, element, attrs) {
        // observe changes in attribute - could also be scope.$watch
        /*attrs.$observe('yourDirective', function (value) {
            if (value) {
                console.log(value);
                // pass value to app controller
                scope.variable = value;
            }
        });*/
    };

    var controllerFunction = function($scope, $element, $attrs) {
        // observe changes in attribute - could also be scope.$watch
        var unRegissterWatch = $scope.$watch('inData', function(newValue, oldValue) {
            //console.log('hey, myVar has changed!'+ angular.toJson(newValue));
            if (newValue.flatListing) {
                console.log(newValue);
                $scope.flatsDetails = newValue.flatListing;
                unRegissterWatch();
                //setData();
            }
        });

        $scope.displayMenu = function(index){
          console.log("before change"+angular.toJson($scope.flatsDetails[index]));
          $scope.flatsDetails[index].showMenu = !$scope.flatsDetails[index].showMenu;
          console.log("after change"+angular.toJson($scope.flatsDetails[index]));
        };
    };

    return {
        restrict: 'E',
        templateUrl: "angular-app/modules/flats/directives/flatDetails/flatDetails-template.html",
        link: linkFunction,
        controller: controllerFunction,
        scope: {
            inData: "=",
            navigateToFlat: "&getSelectedFlatDetails"
        }
    };
});
