import { ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY } from "./actionTypes"

export const addToCart = (value) => {
    return {
        type: ADD_TO_CART,
        payload: value
    }
}

export const decreaseQuantity = (value) => {
    return {
        type: DECREASE_QUANTITY,
        payload: value
    }
}

export const increaseQuantity = (value) => {
    return {
        type: INCREASE_QUANTITY,
        payload: value
    }
}