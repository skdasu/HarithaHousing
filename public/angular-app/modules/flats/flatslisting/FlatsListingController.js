/************************************************************
 ****    AUTHOR: Srikrishna Dasu                             *
 ****    Version 1.0                                         *
 ****    Hash: harithaHousing                                *
 **************************************************************/

angular.module('harithaHousing').
controller('FlatsListingController', ['$scope', '$stateParams', '$state', '$rootScope', 'FlatsFacade', function($scope, $stateParams, $state, $rootScope, FlatsFacade) {

    $scope.tagline = "Flats Listing Controller";

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

    $scope.getSelectedFlatDetails = function(flatID){
      console.log("came to flat details from directive "+flatID);
      $state.go('detail', {
          flatID: flatID
      });
    }

    console.log("came to Flats Listing controller  " + $scope.selectedBlock + " " + $scope.selectedBlockNumber);
    $scope.getFlatsInBlock();

}]);
