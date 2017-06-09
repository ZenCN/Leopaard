/**
 * Created by Zen on 2017/6/5.
 */

(function() {
    'use strict';

    angular
        .module('app.widget')
        .directive('ngSlick', ngSlick)
        .directive('ngSlide', ngSlide)

    //ngSlick.$inject = [];

    function ngSlick() {
        return function (vm, $element) {
            vm.$on('slick-cars', function(){
                $element.empty();

                var $cars_wrapper = $element.append('<div class="cars"></div>').find('.cars');

                $.each(vm.cars.models[vm.cars.models.selected], function(){
                    $cars_wrapper.append('<div><img src="' + this.img_url + '"/><p>' + this.name + '</p></div>')
                });

                $cars_wrapper.slick({
                    variableWidth: true
                });
            });

            vm.$broadcast('slick-cars');
        };
    };

    function ngSlide() {
        return function(vm, $element){
            $(function(){
                $element.slick({
                    accessibility: false,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    cssEase: 'linear',
                    fade: true,
                    arrows: false,
                    dots: true
                });
            })
        }
    }
})();