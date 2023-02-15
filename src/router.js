import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from './components/pages/LoginForm.vue';
import RegistrationForm from './components/pages/RegistrationForm.vue';
import GroupList from "./components/pages/GroupList.vue";
import ExpensesList from './components/pages/ExpensesList.vue';
import store from './store/index.js';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: LoginForm, meta: { requiresUnAuth: true }
    }, {
        path: '/registration',
        name: 'Registration',
        component: RegistrationForm, meta: { requiresUnAuth: true }
    },
    {
        path: '/grouplist',
        name: 'GroupList',
        component: GroupList,
        meta: { requiresAuth: true }
    },
    { path: '/group/:id', name: 'Expenses', component: ExpensesList, props: true, meta: { requiresAuth: true } },
    { path: '/:notFound(.*)', redirect: '/' }
];
const router = createRouter({
    history: createWebHistory(), routes
});

router.beforeEach(function (to, _, next) {
    if (to.meta.requiresAuth && !store.getters.currentUserIsAuthenticated) {
        next('/');
    } else if (to.meta.requiresUnAuth && store.getters.currentUserIsAuthenticated) {
        next('/grouplist');
    } else {
        next();
    }
}
);


export default router;