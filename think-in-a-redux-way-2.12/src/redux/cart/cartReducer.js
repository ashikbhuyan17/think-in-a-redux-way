import { ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY } from "./actionTypes"

const initialState = {
    item: 0,
    price: 0,
    product1: "",
    product1Count: 0,
    product2: "",
    product2Count: 0,
    product3: "",
    product3Count: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (action.payload.id === 1) {
                return {
                    ...state,
                    product1: action.payload,
                    item: state.item + 1,
                    product1Count: state.product1Count + 1,
                    price: state.product1Count == 0 ? (action.payload.price + state.price) : (action.payload.price + state.price)
                }
            }
            if (action.payload.id === 2) {
                return {
                    ...state,
                    product2: action.payload,
                    item: state.item + 1,
                    product2Count: state.product2Count + 1,
                    price: state.product2Count == 0 ? (action.payload.price + state.price) : (state.price + action.payload.price)
                }
            }
            if (action.payload.id === 3) {
                return {
                    ...state,
                    product3: action.payload,
                    item: state.item + 1,
                    product3Count: state.product3Count + 1,
                    price: state.product3Count == 0 ? (action.payload.price + state.price) : (state.price + action.payload.price)
                }
            }

        case INCREASE_QUANTITY:
            console.log(",,,,,,,,,,,,,,,,,", action.payload.id)
            if (action.payload.id === 1) {
                return {
                    ...state,
                    product1: action.payload.cart.product1,
                    item: state.item + 1,
                    product1Count: state.product1Count + 1,
                    price: (action.payload.cart.price + action.payload.cart.product1.price)
                }
            }
            if (action.payload.id === 2) {
                return {
                    ...state,
                    product2: action.payload.cart.product2,
                    item: state.item + 1,
                    product2Count: state.product2Count + 1,
                    price: (action.payload.cart.price + action.payload.cart.product2.price)
                }
            }
            if (action.payload.id === 3) {
                return {
                    ...state,
                    product3: action.payload.cart.product3,
                    item: state.item + 1,
                    product3Count: state.product3Count + 1,
                    price: (action.payload.cart.price + action.payload.cart.product3.price)
                }
            }
        case DECREASE_QUANTITY:
            console.log(",,,,,,,,,,,,,,,,,", action.payload.id)
            if (action.payload.id === 1) {
                return {
                    ...state,
                    product1: action.payload.cart.product1,
                    item: state.item - 1,
                    product1Count: state.product1Count - 1,
                    price: (action.payload.cart.price - action.payload.cart.product1.price)
                }
            }
            if (action.payload.id === 2) {
                return {
                    ...state,
                    product2: action.payload.cart.product2,
                    item: state.item - 1,
                    product2Count: state.product2Count - 1,
                    price: (action.payload.cart.price - action.payload.cart.product2.price)
                }
            }
            if (action.payload.id === 3) {
                return {
                    ...state,
                    product3: action.payload.cart.product3,
                    item: state.item - 1,
                    product3Count: state.product3Count - 1,
                    price: (action.payload.cart.price - action.payload.cart.product3.price)
                }
            }
        default:
            return state
    }
}

export default cartReducer;