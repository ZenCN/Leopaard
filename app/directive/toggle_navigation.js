/**
 * Created by Zen on 2017/6/5.
 */

(function() {
    'use strict';

    angular
        .module('app.widget')
        .directive('toggleNavigation', toggleNavigation);

    //toggleNavigation.$inject = [];

    function toggleNavigation() {
        return function (vm, $element, attrs) {
            $(function(){
                $element.click(function () {

                    if(angular.isString(attrs['params'])){
                        var params = eval('(' + attrs['params'] + ')'), config, $target;

                        angular.forEach(params, function (_this) {
                            $target = $(_this.s);
                            config = {};
                            config[_this.d] = _this.px_close;

                            if($target.hasClass('open')){
                                $target.animate(config, 350, function () {
                                    $(this).removeClass('open');
                                });

                                if(_this.connected){
                                    config[_this.d] = Number($element.css('left').replace('px','')) - Math.abs(_this.px_close);
                                    $element.animate(config, 350);
                                }
                            }
                        });
                    }else{
                        var $target = $(attrs['selector']), px = attrs['pxOpen'], config = {};

                        if($target.hasClass('open')){
                            px = attrs['pxClose'];
                        }

                        config[attrs['direction' ]] = px;

                        $target.animate(config, 350, function(){
                            if(px < 0){
                                $(this).removeClass('open');
                            }else{
                                $(this).addClass('open');
                            }
                        });

                        if(attrs['recover']){
                            config[attrs['direction' ]] = Math.abs(attrs['pxClose']) - Math.abs(px);
                            $(attrs['recover']).animate(config, 350);
                        }
                    }
                });
            });
        };
    };
})();