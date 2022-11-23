import { combineReducers } from 'redux'

const cartReducer = (cartState = [], action) => {
    switch(action.type){
        case 'ADD_ITEM':
            if(action.payload.cartPush === 0){
                return cartState
            }
            if(cartState.findIndex(item=>item.id === action.payload.id) !== -1){
                let index = cartState.findIndex(e=>e.id === action.payload.id)
                let nState = [...cartState]
                let sum = action.payload.cartPush + nState[index].cartPush
                nState[index].cartPush = sum > nState[index].stock ? nState[index].stock : sum
                return nState
            }
            return cartState.concat(action.payload)
        case 'REMOVE_ITEM':
            return cartState.filter((item)=>item.id !== action.payload)
        case 'UPDATE_ITEM':
            let index = cartState.findIndex(e=>e.id === action.payload.id)
            let nState = [...cartState]
            nState[index] = action.payload.newUpdate
            return nState
        default:
            return cartState
    }
}

const userReducer = (userState = null, action) => {
    switch(action.type){
        case "LOGOUT_USER":
            return action.payload
        default:
            return userState
    }
}


const filterReducer = (filterState = {price: {min: 0, max: 10000}, category: 0, stock: {min: 0, max: 1000}, tags: []}, action) => {
    switch(action.type){
        case "SET_FILTER":
            return action.payload
        case "RESET_FILTER":
            return {price: {min: 0, max: 10000}, category: 0, stock: {min: 0, max: 1000}, tags: []}
        default:
            return filterState
    }
}

const productsReducer = (productsState = [], action) => {
    switch(action.type){
        case "GET_PRODUCTS":
            return action.payload
        default:
            return productsState
    }
}

export default combineReducers({
	cart: cartReducer,
    user: userReducer,
    filter: filterReducer,
    products: productsReducer
})