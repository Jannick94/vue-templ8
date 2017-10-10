import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import AppButton       from '@/components/core/elements/Button/AppButton';
import AppNotification from '@/components/core/elements/Notification/AppNotification';
import AppIcon         from '@/components/core/elements/Icon/AppIcon';
import AppInput        from '@/components/core/elements/Form/AppInput';
import AppInputIcon    from '@/components/core/elements/Form/AppInputIcon';
import AppRow          from '@/components/core/elements/Grid/AppRow';
import AppCol          from '@/components/core/elements/Grid/AppCol';

Vue.component('AppButton', AppButton);
Vue.component('AppNotification', AppNotification);
Vue.component('AppIcon', AppIcon);
Vue.component('AppInput', AppInput);
Vue.component('AppInputIcon', AppInputIcon);
Vue.component('AppRow', AppRow);
Vue.component('AppCol', AppCol);

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})
