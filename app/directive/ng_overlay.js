/**
 * Created by Zen on 2017/6/5.
 */

(function() {
    'use strict';

    angular
        .module('app.widget')
        .directive('ngOverlay', ngOverlay);

    //ngOverlay.$inject = [];

    function ngOverlay() {
        return function (vm, $element) {
            $(function(){
                $element.hover(function () {
                    $(this).find('.overlay').stop().animate({opacity:0.3},400);
                }).mouseleave(function () {
                    $(this).find('.overlay').stop().animate({opacity:0.7},350);
                });
            });
        };
    };
})();