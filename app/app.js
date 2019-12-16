var simpleApp = angular.module('SimpleApp',["ngRoute","Controllers","hmTouchEvents","angularMoment"])

var controllers = angular.module('Controllers', [])

simpleApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'app/views/login.html',
      controller: 'loginController'
    }).
    when('/register', {
      templateUrl: 'app/views/register.html',
      controller: 'registerController'
    }).
    when('/home', {
      templateUrl: 'app/views/home.html',
      controller: 'homeController'
    }).
    when('/page2', {
      templateUrl: 'app/views/page2.html',
      controller: 'page2Controller'
    }).
    when('/formulaire', {
      templateUrl: 'app/views/form.html',
      controller: 'formController'
    }).
    when('/404', {
      templateUrl: 'app/views/404.html',
      controller: '404Controller'
    }).
    otherwise({
      redirectTo: '/404'
    })
}])