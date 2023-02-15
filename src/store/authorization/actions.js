export default {
    async loginProcess(context, dataFrom) {
        let formData = new FormData();
        formData.append("username", dataFrom.username);
        formData.append("password", dataFrom.password);
        const response = await fetch("http://127.0.0.1:8000/login", {
            method: "POST",
            body: formData,
        });
        if (!response.ok) {
            console.error('Unsuccessfull login!');
        } else if (response.ok) {
            const responseData = await response.json();
            context.commit('updateCurrentUserID', responseData.user_id);
            context.commit('updateCurrentUserJWT', responseData.access_token);
            context.commit('updateCurrentUserIsAuthenticated');
            localStorage.setItem('user_id', responseData.user_id);
            localStorage.setItem('token', responseData.access_token);
        }

    },
    async logOutUser(context) {
        context.commit('updateCurrentUserIsNotAuthenticated');
        localStorage.removeItem('user_id');
        localStorage.removeItem('token', null);
    },
    async autoLogIn(context) {
        const user_id = localStorage.getItem('user_id');
        const jwt = localStorage.getItem('token');
        if (user_id && jwt) {
            context.commit('setUser', {
                user_id: user_id,
                token: jwt,
            });

        }
    }
}