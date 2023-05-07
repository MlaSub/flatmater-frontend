export default {
    async gettingExpenses({ commit, rootGetters }, data) {
        let url = `http://127.0.0.1:8000/expenses/items/${data.id}`
        if (data.name) {
            url = `http://127.0.0.1:8000/expenses/items/${data.id}?search=` + data.name
        }
        const jwt = rootGetters.currentUserJWTt;
        const repsonse = await fetch(url, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-type": "application/json",
                Authorization:
                    `Bearer ${jwt}`,
            },
        });
        const responseData = await repsonse.json();

        const expenses = [];

        for (const key in responseData) {
            const expense = {
                id: responseData[key].id,
                name: responseData[key].name,
                description: responseData[key].description,
                amount: responseData[key].amount
            };
            expenses.push(expense);
        }
        commit('setExpenses', expenses);
    },
    async addNewExpense({ commit, rootGetters }, data) {
        const jwt = rootGetters.currentUserJWTt;
        const response = await fetch('http://127.0.0.1:8000/expenses/items', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-type": "application/json",
                Authorization:
                    `Bearer ${jwt}`,
            },
            body: JSON.stringify(data)
        });
        const responseData = await response.json();
        const newExpense = {
            id: responseData.id,
            name: data.name,
            amount: data.amount,
            description: data.description,
            expenses_group_id: data.expenses_group_id,
        };
        console.log(newExpense);
        if (!response.ok) {
            throw new Error('Error!');
        } else {
            commit('setNewExpense', newExpense);
        }
    },
    async expensesStats({ commit, rootGetters }, data) {
        const data_filter = {
            "group_id": data
        }
        const jwt = rootGetters.currentUserJWTt;
        const response = await fetch('http://127.0.0.1:8000/overview/', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-type": "application/json",
                Authorization:
                    `Bearer ${jwt}`,
            },
            body: JSON.stringify(data_filter)
        });
        const responseData = await response.json();
        if (!response.ok) {
            throw new Error('Error!');
        } else {
            commit('setNewStats', responseData);
        }
    },
    async expenseDebtors({ commit, rootGetters }, data) {
        const data_filter = {
            "group_id": data
        }
        const jwt = rootGetters.currentUserJWTt;
        const response = await fetch('http://127.0.0.1:8000/overview/debt', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-type": "application/json",
                Authorization:
                    `Bearer ${jwt}`,
            },
            body: JSON.stringify(data_filter)
        });
        const responseData = await response.json();
        if (!response.ok) {
            throw new Error('Error!');
        } else {

            commit('setExpensesDebtors', responseData.debtors);
            commit('setExpensesOwing', responseData.owing);
        }

    },
    async deletingExpesne({ commit, rootGetters }, id) {
        const jwt = rootGetters.currentUserJWTt;
        const response = await fetch(`http://127.0.0.1:8000/expenses/items/${id}`, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-type": "application/json",
                Authorization:
                    `Bearer ${jwt}`,
            },
        });
        if (!response.ok) {
            throw new Error('Error!');
        } else {
            commit('deleteExpense', id);

        }
    },
    async groupDetails({ commit, rootGetters }, id) {
        const jwt = rootGetters.currentUserJWTt;
        const response = await fetch(`http://127.0.0.1:8000/expenses-group/${id}`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-type": "application/json",
                Authorization:
                    `Bearer ${jwt}`,
            },
        });
        const responseData = await response.json();
        if (response.ok) {
            const group_users = responseData.users;
            commit('addingGroupUsers', group_users);
        }
    }

};