export default {
    updateCurrentUserID(state, payload) {
        state.userID = payload;

    },
    updateCurrentUserJWT(state, payload) {
        state.userJWT = payload;
    },
    updateCurrentUserIsAuthenticated(state) {
        state.userIsAuthenticated = true;
    },
    updateCurrentUserIsNotAuthenticated(state) {
        state.userIsAuthenticated = false;
        state.userJWT = null;
    },
    setUser(state, payload) {
        state.userIsAuthenticated = true;
        state.userID = payload.user_id;
        state.userJWT = payload.token;
    }
}