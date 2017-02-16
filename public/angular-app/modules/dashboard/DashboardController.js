/************************************************************
 ****    AUTHOR: Srikrishna Dasu                             *
 ****    Version 1.0                                         *
 ****    Hash: harithaHousing                                *
 **************************************************************/

angular.module('harithaHousing').
controller('DashboardController', ['$scope', '$stateParams', '$state', '$rootScope', function($scope, $stateParams, $state, $rootScope) {

    $scope.tagline = "Dashboard Controller";

    $scope.blockClick = function(blockName, blockNum) {
        console.log("came to blocks controllerv  " + blockName + "     " + blockNum)
        $state.go('flatsListing', {
            blockSelected: blockName,
            blockNumber: blockNum
        });
    }



}]);
