/**
 * Created by Zen on 2017/6/2.
 */

(function() {
    'use strict';

    angular
        .module('app.page')
        .controller('head_ctrl', head_ctrl);

    head_ctrl.$inject = ['$scope', '$state'];

    function head_ctrl(vm, $state) {
        vm.cars = {
            models:{
                selected: 'all',
                expolre_type: 'one',
                select: function(type){
                    if(this.selected != type){
                        this.selected = type;
                        vm.$broadcast('slick-cars');
                    }
                },
                suv: [
                    {img_url: 'image/cars/suv/570B.png', name:'570B'},
                    {img_url: 'image/cars/suv/550GT.png', name:'550GT'},
                    {img_url: 'image/cars/suv/560S.png', name:'560S'},
                    {img_url: 'image/cars/suv/650S Can Am Profile.jpg', name:'650S Can Am Profile'},
                ],
                pick_up:[
                    {img_url: 'image/cars/pick_up/Pick-up S1.jpg', name:'Pick-up S1'},
                    {img_url: 'image/cars/pick_up/Pick-up XS.png', name:'Pick-up XS'},
                    {img_url: 'image/cars/pick_up/Pick-up 540C.png', name:'Pick-up 540C'},
                    {img_url: 'image/cars/pick_up/Pick-up 625.png', name:'Pick-up 625'}
                ]
            },
            selected: undefined
        };

        vm.cars.models.all = vm.cars.models.suv.concat(vm.cars.models.pick_up);

        window.vm = vm;   //仅对测试开放
    }
})();