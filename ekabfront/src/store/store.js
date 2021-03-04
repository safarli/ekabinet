import { createStore } from 'vuex'

const store = createStore({
    state: function () {
        return {
            count: 0,
            sweets: [],
            drinks: []
        }
    },

    getters: {
        getCount: function (state) {
            return state.count;
        },
        getSweets: function (state) {
            return state.sweets
        },
        getDrinks: function (state) {
            return state.drinks
        }
    },

    mutations: {
        CHANGE_COUNT: function (state, payload) {
            state.count += payload;
        },
        ADD_SWEET: function (state, payload) {
            state.sweets.push(payload)
        },
        ADD_DRINK: function (state, payload) {
            state.drinks.push(payload)
        }
    },

    actions: {
        delayedChangeCount(context, payload) {
            setTimeout(
                () => {context.commit("CHANGE_COUNT", payload)}, 4000)
        }
    }
})

export {
    store
}