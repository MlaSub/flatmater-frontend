export default {
    setExpenses(state, payload) {
        state.expenseList = payload;
    },
    setNewExpense(state, payload) {
        state.expenseList.unshift(payload);
    },
    setNewStats(state, payload) {
        state.expenseStats = payload;
    },
    deleteExpense(state, payload) {
        const array = state.expenseList;
        const index = array.findIndex(v => v.id === payload);
        array.splice(index, 1);
    },
    addingGroupUsers(state, payload) {
        state.expenseMembers = payload;
    },
    setExpensesDebtors(state, payload) {
        state.expenseStatsDebtors = payload;
    },
    setExpensesOwing(state, payload) {
        state.expenseStatsOwing = payload;
    }
}