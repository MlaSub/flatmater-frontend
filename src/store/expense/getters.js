export default {
    expense(state) {
        return state.expenseList;
    },
    expensesStatsTotal(state) {
        return state.expenseStats;
    },
    currentMembers(state) {
        return state.expenseMembers;
    },
    currentExpenseStatsDebtors(state) {
        console.log(state.expenseStatsDebtors);
        return state.expenseStatsDebtors;
    },
    currentExpenseStatsOwings(state) {
        console.log(state.expenseStatsOwing);
        return state.expenseStatsOwing;
    }
}