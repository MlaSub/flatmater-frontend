import { createStore } from 'vuex';

import expensesGroup from './expenses-group/index.js';
import expenseModule from './expense/index.js';
import authorizationModule from './authorization/index.js';
import registrationModule from './registration/index.js';

const store = createStore({
    modules: {
        groups: expensesGroup,
        expense: expenseModule,
        authorization: authorizationModule,
        registration: registrationModule
    },

    getters: {
        // currentUserID(state) {
        //     return state.userID;
        // }
    }
});

export default store;