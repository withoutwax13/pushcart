import API from "../API"
import store from "../store"

// cart
export const addToCart = (product) => {
    return {
        type: "ADD_ITEM",
        payload: product
    }
}

export const removeFromCart = (productID) => {
    return {
        type: "REMOVE_ITEM",
        payload: productID
    }
}

export const updateCart = (itemID, newState) => {
    return {
        type: "UPDATE_ITEM",
        payload: {
            id: itemID,
            newUpdate: newState
        }
    }
}

export const clearCart = () => {
    return {
        type: "CLEAR_CART"
    }
}

// user
export const logoutCurrentUser = () => {
    return {
        type: "LOGOUT_USER",
        payload: null
    }
}

// category
export const changeProductCategory = (categoryIndex) => {
    return {
        type: "CHANGE_CATEGORY",
        payload: categoryIndex
    }
}

// filter
export const setFilter = (selectedFilter) => {
    return {
        type: "SET_FILTER",
        payload: selectedFilter
    }
}

export const resetFilter = () => {
    return {
        type: "RESET_FILTER"
    }
}


// products
export const getProducts = () => async dispatch => {
    API.get(`products`)
        .then((response)=>{
            dispatch({
                type: "GET_PRODUCTS",
                payload: response.data
            })
        })
}

export const getProductsByFilter = (sfilter)=> async dispatch => {
    API.get(`products`)
        .then((response)=>{
            let newProds = response.data
            newProds.data = newProds.data.filter((prod)=>prod.price <= sfilter.price.max && prod.price >= sfilter.price.min).filter((prod)=>prod.stock <= sfilter.stock.max && prod.stock >= sfilter.stock.min)
            dispatch({
                type: "GET_PRODUCTS_BY_FILTER",
                payload: newProds
            })
        })
}

export const clearProducts = () => {
    return {
        type: "CLEAR_PRODUCTS"
    }
}

// user
export const login = (creds) => async dispatch => {
    API.get('customers')
        .then((response)=>{
            let customers = response.data.data,
                user = customers.filter(e=>e.email_address===creds.email_address)[0]
            if(user.password === creds.password){
                dispatch({
                    type: "LOGIN_USER",
                    payload: user
                })
            }

        })
}


// orders
export const getOrders = (cust_id) => async dispatch => {
    API.get(`orders`) //with filter eme here if possible
        .then((response)=>{
            let orders = response.data.data,
                userOrder = orders.filter(e=>e.customer_id===cust_id)
                dispatch({
                    type: "LOGIN_USER",
                    payload: userOrder
                })
        })
}