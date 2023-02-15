export default {
    currentUserID(state) {
        return state.userID;
    },
    currentUserJWTt(state) {
        return state.userJWT;
    },
    currentUserIsAuthenticated(state) {
        return state.userIsAuthenticated;
    }
}