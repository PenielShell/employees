import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    routes: [

        // Dashboards

        {
            path: '/',
            name: 'register-boxed',
            meta: { layout: 'userpages' },
            component: () =>
                import ('../DemoPages/UserPages/RegisterBoxed.vue'),
            // component: () =>
            //     import ('../DemoPages/Dashboards/Analytics.vue'),
        },

        // Pages

        {
            path: '/employees',
            name: 'analytics',
            component: () =>
                import ('../DemoPages/Tables/RegularTables.vue'),
        },

    ]
})