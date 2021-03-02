import { createStore } from 'vuex'

const store = createStore({
    state: function () {
        return {
            sweets: [],
            drinks: []
        }
    },

    getters: {
        getSweets: function (state) {
            return state.sweets
        },
        getDrinks: function (state) {
            return state.drinks
        }
    },

    mutations: {
        addSweet: function (state, payload) {
            state.sweets.push(payload)
        },
        addDrink: function (state, payload) {
            state.drinks.push(payload)
        }
    }
})

export {
    store
}