angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('careers', {
    url: '/careers',
    templateUrl: 'templates/careers.html',
    controller: 'careersCtrl'
  })

  .state('universitiesCareers', {
    url: '/universities_careers',
    templateUrl: 'templates/universitiesCareers.html',
    controller: 'universitiesCareersCtrl'
  })

  .state('careerCompanies', {
    url: '/career_companies',
    templateUrl: 'templates/careerCompanies.html',
    controller: 'careerCompaniesCtrl'
  })

  .state('universitiesFilters', {
    url: '/universities_filters',
    templateUrl: 'templates/universitiesFilters.html',
    controller: 'universitiesFiltersCtrl'
  })

  .state('companiesFilters', {
    url: '/companies_filters',
    templateUrl: 'templates/companiesFilters.html',
    controller: 'companiesFiltersCtrl'
  })

$urlRouterProvider.otherwise('/login')


});