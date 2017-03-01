/************************************************************
 ****    AUTHOR: Srikrishna Dasu                             *
 ****    Version 1.0                                         *
 ****    Hash: harithaHousing                                *
 **************************************************************/

angular.module('harithaHousing').
controller('DetailController', ['$scope', '$stateParams', '$state', '$rootScope', 'FlatsFacade', function($scope, $stateParams, $state, $rootScope, FlatsFacade) {

    $scope.tagline = "Detail Controller";

    $scope.flatID = $stateParams.flatID;

    $scope.getFlatDetails = function() {
        console.log("came to notes load");
        var request = {
            blockName: $scope.householdid,
            blockNum: $scope.agentID
        };
        FlatsFacade.getFlatsInBlock(request).then(function(d) {
            $scope.flatsinBlock = {};
            $scope.flatsinBlock = d;
        });
    };

    console.log("came to Flats Listing controller  " + $scope.selectedBlock + " " + $scope.selectedBlockNumber);
    $scope.getFlatDetails();

}]);
