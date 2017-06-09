/**
 * Created by Zen on 2017/6/5.
 */

(function() {
    'use strict';

    angular
        .module('app.widget')
        .directive('ngScrollbar', ngScrollbar);

    //ngScrollbar.$inject = [];

    function ngScrollbar() {
        return function (vm, $element) {
            $element.perfectScrollbar({
                suppressScrollX: true
            });

            $(window).trigger("resize");
        };
    };
})();