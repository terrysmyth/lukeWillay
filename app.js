angular.module("myApp", [])

var app = angular.module("myApp", ["ngRoute", "ui.router"]);


app.directive('navbar', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/navbar.html'
    }
});

app.directive('footer', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/footer.html'
    }
});


app.config(function($stateProvider) {
    var home = {
        name: 'home',
        url: 'home',
        templateUrl: 'home.html'
    }

    var about = {
        name: 'about',
        url: 'about',
        templateUrl: 'about.html'
    }

    var article = {
        name: 'article',
        url: 'article',
        templateUrl: 'article.html'
    }
    
    $stateProvider.state(home);
    $stateProvider.state(article);
    $stateProvider.state(about);
   
});

app.config(function($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "home.html",
        })

        .when("/about", {
            templateUrl: "about.html",
        })

        .when("/archive", {
            templateUrl: "archive.html"
        })

        .when("/article", {
            templateUrl: "article.html"
        })

        .otherwise({
            redirectTo: '/home'
        });
});