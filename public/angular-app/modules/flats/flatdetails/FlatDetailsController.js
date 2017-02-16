/************************************************************
 ****    AUTHOR: Srikrishna Dasu                             *
 ****    Version 1.0                                         *
 ****    Hash: harithaHousing                                *
 **************************************************************/

angular.module('harithaHousing').
controller('FlatDetailsController', ['$scope', '$stateParams', '$state', '$rootScope', 'FlatsFacade', function($scope, $stateParams, $state, $rootScope, FlatsFacade) {

    $scope.tagline = "Flat Details Controller";

    $scope.selectedBlock = $stateParams.blockSelected;
    $scope.selectedBlockNumber = $stateParams.blockNumber;
    $scope.flatsinBlock = {};

    $scope.getFlatsInBlock = function() {
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
    
    $scope.getSelectedFlatDetails = function(){
    	console.log("came to controller function");
    };

    console.log("came to Flats Listing controller  " + $scope.selectedBlock + " " + $scope.selectedBlockNumber);
    $scope.getFlatsInBlock();

}]);
