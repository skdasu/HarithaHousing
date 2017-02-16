/************************************************************
 ****    AUTHOR: Srikrishna Dasu                             *
 ****    Version 1.0                                         *
 ****    Hash: harithaHousing                                *
 **************************************************************/

angular.module('harithaHousing').
controller('BlocksListingController', ['$scope', '$stateParams', '$state', '$rootScope', function($scope, $stateParams, $state, $rootScope) {

    $scope.tagline = "Blocks controller";
    $scope.blocks = {
        "blocksDetails": [{
            "blockName": "Vamshadhara",
            "blockNum": "I",
            "numFlats": "200"
        }, {
            "blockName": "Vamshadhara",
            "blockNum": "II",
            "numFlats": "150"
        }, {
            "blockName": "Nagavali",
            "blockNum": "I",
            "numFlats": "100"
        }, {
            "blockName": "Nagavali",
            "blockNum": "II",
            "numFlats": "100"
        }, {
            "blockName": "Vamshadhara",
            "blockNum": "II",
            "numFlats": "200"
        }]
    };

    //console.log("came to blocks controller" + $scope.blocks['blocks-details'].length);

    $scope.blockClick = function(blockName, blockNum) {
        console.log("came to blocks controllerv  " + blockName + "     " + blockNum)
        $state.go('flatsListing', {
            blockSelected: blockName,
            blockNumber: blockNum
        });
    }



}]);
