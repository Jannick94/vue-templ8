import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import AppButton from '@/components/core/elements/Button/AppButton';
import AppNotification from '@/components/core/elements/Notification/AppNotification';

Vue.component('AppButton', AppButton);
Vue.component('AppNotification', AppNotification);

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})
