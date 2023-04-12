export default {
    async gettingGroups({ commit, rootGetters }, data) {
        const search_filer = data || null;
        const jwt = rootGetters.currentUserJWTt;
        let urll = '';
        if (search_filer == null) {
            urll = "http://127.0.0.1:8000/expenses-group";
        }
        else {
            urll = "http://127.0.0.1:8000/expenses-group/all?search=" + search_filer;
        }
        let repsonse = await fetch(urll, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-type": "application/json",
                Authorization:
                    `Bearer ${jwt}`,
            }
        }
        );
        const responseData = await repsonse.json();

        const expensesGroup = [];

        for (const key in responseData) {
            const groupone = {
                id: responseData[key].id,
                title: responseData[key].title,
                total_amount: responseData[key].total_amount
            };
            expensesGroup.push(groupone);
        }
        commit('setExpensesGroup', expensesGroup);
    },
    async addNewGroup({ commit, rootGetters }, title) {
        const jwt = rootGetters.currentUserJWTt;
        const response = await fetch('http://127.0.0.1:8000/expenses-group/', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-type": "application/json",
                Authorization:
                    `Bearer ${jwt}`,
            },
            body: JSON.stringify({
                title: title
            })
        });
        const responseData = await response.json();
        if (!response.ok) {
            throw new Error('Error!');
        } else {
            const newExpenseGroup = {
                id: responseData.id,
                title: title,
                total_amount: 0
            }
            commit('setNewExpenseGroup', newExpenseGroup);
        }
    },
    async deleteGroup({ commit, rootGetters }, id) {
        const jwt = rootGetters.currentUserJWTt;
        const response = await fetch(`http://127.0.0.1:8000/expenses-group/${id}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                "Content-type": "application/json",
                Authorization:
                    `Bearer ${jwt}`,
            },
        });
        if (!response.ok) {
            throw new Error('Error!')
        } else {
            commit('deletingGroup', id);
        }
    }
};