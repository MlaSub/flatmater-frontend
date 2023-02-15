export default {
    setExpensesGroup(state, payload) {
        state.expensesGroup = payload;
    },
    setNewExpenseGroup(state, payload) {
        state.expensesGroup.unshift(payload);
    },
    deletingGroup(state, payload) {
        const index = state.expensesGroup.findIndex(v => v.id == payload);
        state.expensesGroup.splice(index, 1);
    }
}