import { createApp } from 'vue';
// import { createRouter, createWebHistory } from 'vue-router';
import store from './store/index.js';
import App from './App.vue';
// import LoginForm from './components/pages/LoginForm.vue';
// import RegistrationForm from './components/pages/RegistrationForm.vue';
// import GroupList from "./components/pages/GroupList.vue";
import BaseCard from './components/UI/BaseCard.vue';
import ThePaginationNavigation from './components/layout/ThePageNavigation.vue';
import DeleteButton from './components/UI/DeleteButton.vue';
// import ExpensesList from './components/pages/ExpensesList.vue';

import router from './router.js';

// const routes = [
//     {
//         path: '/',
//         name: 'Home',
//         component: LoginForm
//     }, {
//         path: '/registration',
//         name: 'Registration',
//         component: RegistrationForm
//     },
//     {
//         path: '/grouplist',
//         name: 'GroupList',
//         component: GroupList
//     },
//     { path: '/group/:id', name: 'Expenses', component: ExpensesList, props: true },
//     { path: '/:notFound(.*)', redirect: '/' }
// ];
// const router = createRouter({
//     history: createWebHistory(), routes
// });


const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('the-pagination-navigation', ThePaginationNavigation);
app.component('delete-button', DeleteButton);
app.mount('#app');
