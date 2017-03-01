/************************************************************
 ****    AUTHOR: Srikrishna Dasu                             *
 ****    Version 1.0                                         *
 ****    Hash: harithaHousing                                *
 **************************************************************/
angular.module('harithaHousing').
factory('FlatsFacade', ['$q', '$http', function($q, $http) {
    return {

        getFlatsInBlock: function(request) {
            var response = {};
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'http://localhost:7000/assets/data/flats.json'
            }).success(function(data) {
                // With the data succesfully returned, call our callback
                //response = data;
                deferred.resolve(data);
            }).error(function() {
                console.log("error getting data - FlatsFacade - getFlatsInBlock");
            });
            return deferred.promise;
        },

        getFlatDetail: function(request) {
            var response = {};
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'http://localhost:7000/assets/data/flatDetail.json'
            }).success(function(data) {
                deferred.resolve(data);
            }).error(function() {
                console.log("error getting data - FlatsFacade - getFlatDetail");
            });
            return deferred.promise;
        }

    };
}]);
/*
JSON - Generator - Profile for flats data generation
[
  '{{repeat(100, 200)}}',
  {
    flatID: '{{index()}}',
    flatNum: '{{index(101)}}',
    rented: '{{bool()}}',
    occupancyByOwner: '{{bool()}}',
    balance: '{{integer(1000, 4000, "0,0.00")}}',
    age: '{{integer(20, 40)}}',
    eyeColor: '{{random("blue", "brown", "green")}}',
    name: '{{firstName()}} {{surname()}}',
    gender: '{{gender()}}',
    email: '{{email()}}',
    phone: '+1 {{phone()}}',
    showMenu: false,
    registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}'
  }
]
*/
