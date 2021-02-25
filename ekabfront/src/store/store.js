import { createStore } from 'vuex'

const store = createStore({
    state: function () {
        return {
            count: 0,
        }
    },
    mutations: {
        increment: function (state) {
            state.count++
        }
    },
    getters: {
        getCount: function (state) {
            return state.count
        }
    }
})

export {
    store
}