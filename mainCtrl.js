 "use strict";

 angular.module("myApp")

     .controller('mainCtrl', function($rootScope, $scope, $location, $state) {

         $scope.articleS = function(article) {
             $state.go('article');
             $rootScope.chosenArticle = article;
         }


         $scope.navbar = [
            ["Home", "/#/home"],
            ["About", "/#/about"],
            ["Contact", "/#/contact"]
         ]

         $scope.hero = {
            title: "SuperFun",
            subTitle: "Dupes and Poopes",
            button: {
                text: "Click Here",
                link: "/#/about"
            }
         }

         



         $scope.info = {
             name: "Terry",
             age: 31,
             job: "King",
             info: "The King shall decree that there shall be no other King!"
         }

         $scope.test = {
             name: "Something",
             lastName: "Other",
             age: 1000,
             hobbies: [
                 "football",
                 "tennis",
                 "burping"
             ]
         }

         $scope.list = [ //array
             "Chicken",
             "Bread",
             "Butter",
             "Milk"
         ]

         $scope.classMates = [{
                 name: "Terry",
                 lastName: "Wayburne",
                 job: "King"
             },
             {
                 name: "William",
                 lastName: "Ross",
                 job: "Tagz4U"
             },
             {
                 name: "Bzen",
                 lastName: "Calton",
                 job: "Garbage bag distributor"
             }
         ]
















     })