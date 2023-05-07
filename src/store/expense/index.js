import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state() {
        return {
            expenseList: {
                id: '', name: '', description: '', amount: ''
            },
            expenseID: null,
            expenseStats: {
                total_group_expense: 0,
                total_personal_expense: 0
            },
            expenseStatsDebtors: null,
            expenseStatsOwing: null,
            expenseMembers: null
            // {
            //     id: '', name: '', description: '', amount: ''
            // }
        };
    },
    mutations,
    actions,
    getters
}