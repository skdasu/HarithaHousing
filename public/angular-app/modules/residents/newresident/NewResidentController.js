/************************************************************
 ****    AUTHOR: Srikrishna Dasu                             *
 ****    Version 1.0                                         *
 ****    Hash: harithaHousing                                *
 **************************************************************/

angular.module('harithaHousing').
controller('NewResidentController', ['$scope', '$stateParams', '$state', '$rootScope', function($scope, $stateParams, $state, $rootScope) {

   $scope.tagline = "NewResident controller";
   $scope.residentFrom = new Date();
   $scope.openDate = {
       opened: false
   };
   $scope.dateOptions = {
       formatYear: 'yyyy',
       startingDay: 1
   };

   $scope.openDateSelection = function() {
       $scope.openDate.opened = true;
   };

}]);
