import { DYNAMIC_INCREMENT, DYNAMIC_DECREMENT } from './actionTypes.js'

const initialState = {
    value: 0
}

const dynamicCounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case DYNAMIC_INCREMENT:
            return {
                ...state,
                value: state.value + action.payload
            }
        case DYNAMIC_DECREMENT:
            return {
                ...state,
                value: state.value - action.payload
            }
        default:
            return state
    }
}

export default dynamicCounterReducer;