import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import AppButton from '@/components/core/elements/Button/AppButton';

Vue.component('AppButton', AppButton);

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})
