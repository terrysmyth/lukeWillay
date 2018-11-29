 "use strict";

 angular.module("myApp")

     .controller('mainCtrl', function($rootScope, $scope, $location, $state, $firebaseObject) {



     	// GET SITE INFRO
     	var ref = firebase.database().ref("siteInfo");
     	var siteInfo = $firebaseObject(ref);
     	siteInfo.$bindTo($scope, "siteInfo");







     })