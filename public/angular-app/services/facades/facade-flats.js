/*************************************************************
 ****    AUTHOR: Srikrishna Dasu                             *
 ****    srikrishna.dasu@cognizant.com                       *
 ****    Version 1.0                                         *
 ****    Hash: Palladium                                     *
 ****    Cognizant DEP-DEE TCG                               *
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
        }

    };

}]);

/*
//Example get Call
getData = function(callbackFunc) {
    $http({
        method: 'GET',
        url: 'https://www.example.com/api/v1/page',
        params: 'limit=10, sort_by=created:desc',
        headers: {
            'Authorization': 'Token token=xxxxYYYYZzzz'
        }
    }).success(function(data) {
        // With the data succesfully returned, call our callback
        callbackFunc(data);
    }).error(function() {
        alert("error");
    });
}



//Example Post Call
var URL = appConfig.MIDDLEWARE_URL + appConfig.LOGIN_URL_PATH;
var headers = {
    'Content-Type': "application/json"
};


var loginRequest = {
    method: 'POST',
    headers: headers,
    url: URL,
    data: {
        username: $scope.credentials.userName,
        password: $scope.credentials.password
    }
};
$http(loginRequest).then(function successCallback(response) {}

};

*/
