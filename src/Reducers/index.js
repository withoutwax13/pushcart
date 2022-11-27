import { combineReducers } from 'redux'

const cartReducer = (cartState = [], action) => {
    switch(action.type){
        case 'ADD_ITEM':
            if(action.payload.cartPush === 0){
                return cartState
            }
            if(cartState.findIndex(item=>item.product_id === action.payload.product_id) !== -1){
                let index = cartState.findIndex(e=>e.product_id === action.payload.product_id)
                let nState = [...cartState]
                let sum = action.payload.cartPush + nState[index].cartPush
                nState[index].cartPush = sum > nState[index].stock ? nState[index].stock : sum
                return nState
            }
            return cartState.concat(action.payload)
        case 'REMOVE_ITEM':
            return cartState.filter((item)=>item.product_id !== action.payload)
        case 'UPDATE_ITEM':
            let index = cartState.findIndex(e=>e.product_id === action.payload.id)
            let nState = [...cartState]
            nState[index] = action.payload.newUpdate
            return nState
        case 'CLEAR_CART':
            return []
        default:
            return cartState
    }
}

const userReducer = (userState = null, action) => {
    switch(action.type){
        case "LOGOUT_USER":
            return action.payload
        case "LOGIN_USER":
            console.log(action.payload)
            return action.payload
        default:
            return userState
    }
}


const filterReducer = (filterState = {
                price: {
                    min: 1, max: null
                }, 
                category: 3001,
                stock: {
                    min: 1, max: null
                }, 
                tags: []
            }, action) => {
    switch(action.type){
        case "SET_FILTER":
            return {
                price: {
                    min: action.payload.price.min, max: action.payload.price.max
                }, 
                category: action.payload.category, 
                stock: {
                    min: action.payload.stock.min, max: action.payload.stock.max
                }, 
                tags: action.payload.tags
            }
        case "RESET_FILTER":
            return {
                price: {
                    min: 1, max: null
                }, 
                category: 3001,
                stock: {
                    min: 1, max: null
                }, 
                tags: []
            }
        default:
            return filterState
    }
}

const productsReducer = (productsState = [], action) => {
    switch(action.type){
        case "GET_PRODUCTS":
            return action.payload
        case "GET_PRODUCTS_BY_FILTER":
            let sfilter = action.payload
            return action.payload
        case "CLEAR_PRODUCTS":
            return []
        default:
            return productsState
    }
}

const ordersReducer = (ordersState = [], action) => {
    switch(action.type){
        case "GET_ORDERS":
            return action.payload
        default:
            return ordersState
    }
}

export default combineReducers({
	cart: cartReducer,
    user: userReducer,
    filter: filterReducer,
    products: productsReducer,
    orders: ordersReducer
})