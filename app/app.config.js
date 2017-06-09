(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider'];

    function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            debug: false,
            events: true
        });

        $urlRouterProvider.when('', '/home');
        $urlRouterProvider.otherwise('/home');

        var resolve_dep = function (config) {
            return {
                load: [
                    '$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load(config);
                    }
                ]
            };
        };

        $stateProvider
            .state('head', {
                url: '',
                abstract: true,
                controller: 'head_ctrl',
                templateUrl: 'app/head/head.html',
                resolve: resolve_dep([
                    'app/head/head.css',
                    'bower_component/jquery-perfect-scrollbar/css/perfect-scrollbar.min.css',
                    'app/head/head_ctrl.js',
                    'app/directive/toggle_navigation.js',
                    'app/directive/ng_slick.js',
                    'bower_component/jquery-perfect-scrollbar/js/perfect-scrollbar.jquery.min.js',
                    'app/directive/ng_scrollbar.js'
                ])
            })
            .state('head.home', {
                url: '/home',
                controller: 'home_ctrl',
                templateUrl: 'app/home/home.html',
                resolve: resolve_dep([
                    'app/home/home.css',
                    'app/home/home_ctrl.js',
                    'app/directive/ng_overlay.js'
                ])
            });
    }
})();