import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import AppButton       from '@/components/core/elements/Button/AppButton';
import AppNotification from '@/components/core/elements/Notification/AppNotification';
import AppIcon         from '@/components/core/elements/Icon/AppIcon';
import AppInput        from '@/components/core/elements/Form/AppInput';

Vue.component('AppButton', AppButton);
Vue.component('AppNotification', AppNotification);
Vue.component('AppIcon', AppIcon);
Vue.component('AppInput', AppInput);

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})
