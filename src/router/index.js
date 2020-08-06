import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '/',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard')
    }, {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home')
    }, {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About')
    }, {
        path: '/setting',
        name: 'Setting',
        component: () => import('@/views/Setting')
    }]   
})