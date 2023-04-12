import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state() {
        return {
            members: { id: 2, name: 'Mana' }
        }
    },
    getters,
    mutations,
    actions
}