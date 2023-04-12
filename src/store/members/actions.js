export default {
    async getAllMembers({ commit, rootGetters }, data) {
        let url = '';
        if (data.search == null) {
            url = 'http://127.0.0.1:8000/users/all?group=' + data.group;
        }
        else {
            url = 'http://127.0.0.1:8000/users/all?group=' + data.group + '&search=' + data.search;
        }
        const jwt = rootGetters.currentUserJWTt;
        const response = await fetch(url, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-type": "application/json",
                Authorization:
                    `Bearer ${jwt}`,
            }
        });
        const responseData = await response.json();
        let allMembers = [];
        if (response.ok) {
            for (const key in responseData) {
                const one_member = {
                    id: responseData[key].id,
                    name: responseData[key].name,
                    surname: responseData[key].surname,
                    member: responseData[key].member
                }
                allMembers.push(one_member);
            }
        } else {
            throw new Error('Error!')
        }
        commit('updatingMembers', allMembers)

    },
    async addingMemberToGroup({ rootGetters }, data) {
        const jwt = rootGetters.currentUserJWTt;
        const response = await fetch('http://127.0.0.1:8000/expenses-group/member', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-type": "application/json",
                Authorization:
                    `Bearer ${jwt}`,
            }, body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Member is not added to the group!')
        }
    },
    async removingMemberFromGroup({ rootGetters }, data) {
        const jwt = rootGetters.currentUserJWTt;
        const response = await fetch(`http://127.0.0.1:8000/expenses-group/member/${data.member_id}/group/${data.group_id}`, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-type": "application/json",
                Authorization:
                    `Bearer ${jwt}`,
            }, body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Member is not added to the group!')
        }
    }
}