import axios from "axios";

export default ({
    namespaced: true,

    state: {
        token: null,
        user: null
    },

    getters: {
        authenticated(state) {
            return state.token && state.user
        },

        user(state) {
            return state.user
        }
    },

    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },

        SET_USER(state, user) {
            state.user = user
        }
    },

    actions: {
        async login({ dispatch }, credentials) {
            const response = await axios.post(`http://localhost:8080/api/login`, credentials);
            return dispatch('attempt', response.data.token)
        },

        async attempt({ commit, state }, token) {
            if (token) {
                commit('SET_TOKEN', token)
            }

            if (!state.token) {
                return
            }

            try {
                const response = await axios.get(`http://localhost:8080/api/session`)
                commit('SET_USER', response.data.login)
            } catch (e) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        },
        logOut({ commit }) {
            commit('SET_TOKEN', null)
            commit('SET_USER', null)
        }
    }
})