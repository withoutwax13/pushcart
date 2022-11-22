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

const userReducer = (userState = {}, action) => {
    switch(action.type){
        default:
            return userState
    }
}

export default combineReducers({
	cart: cartReducer,
    user: userReducer
})