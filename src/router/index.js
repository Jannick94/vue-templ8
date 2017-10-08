import Vue           from 'vue'
import Router        from 'vue-router'
import Home          from '@/components/pages/Home';
import Buttons       from '@/components/pages/Buttons';
import Modals        from '@/components/pages/Modals';
import Notifications from '@/components/pages/Notifications';
import Alerts        from '@/components/pages/Alerts';
import Form          from '@/components/pages/Form';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path: '/buttons',
        name: 'Buttons',
        component: Buttons
    },
    {
        path: '/modals',
        name: 'Modals',
        component: Modals
    },
    {
        path: '/notifications',
        name: 'Notifications',
        component: Notifications
    },
    {
        path: '/alerts',
        name: 'Alerts',
        component: Alerts
    },
    {
        path: '/form',
        name: 'Form',
        component: Form
    }
  ]
})
