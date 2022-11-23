import API from "../API"

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

export const logoutCurrentUser = () => {
    return {
        type: "LOGOUT_USER",
        payload: null
    }
}

export const changeProductCategory = (categoryIndex) => {
    return {
        type: "CHANGE_CATEGORY",
        payload: categoryIndex
    }
}

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

// fetch products based on filter
export const getProducts = (filter) => async dispatch => {
    API.get(`products`) //with filter eme here if possible
        .then((response)=>{
            dispatch({
                type: "GET_PRODUCTS",
                payload: response.data
            })
        })
}

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