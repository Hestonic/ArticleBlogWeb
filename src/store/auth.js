import axios from "axios";

export default ({
    namespaced: true,

    state: {
        token: null,
        user: null
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
        async login({dispatch}, credentials) {
            const response = await axios.post(`http://localhost:8080/api/login`, credentials);
            dispatch('attempt', response.data)
        },

        async attempt({commit}, token) {
            commit('SET_TOKEN', token)

            try {
                const response = await axios.post(`http://localhost:8080/api/session`, token)
                commit('SET_USER', response.data.login)
            } catch (e) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        }
    }
})