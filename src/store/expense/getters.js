export default {
    expense(state) {
        return state.expenseList;
    },
    expensesStatsTotal(state) {
        return state.expenseStats;
    },
    currentMembers(state) {
        return state.expenseMembers;
    }
}