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

export const setCategoryFilter = (categoryID) => {
    return {
        type: "SET_CATEGORY_FILTER",
        payload: categoryID
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

export const getProductsByFilter = (sfilter = {
    price: {
        min: 1, max: null
    }, 
    category: null,
    stock: {
        min: 1, max: null
    }, 
    tags: []
})=> async dispatch => {
    API.get(`products`)
        .then((response)=>{
            let newProds = response.data
            newProds.data = newProds.data.filter((prod)=>{
                                            if(sfilter.price.max !== null){
                                                return prod.price <= sfilter.price.max && prod.price >= sfilter.price.min
                                            }else{
                                                return prod.price >= sfilter.price.min
                                            }
                                        })
                                        .filter((prod)=>{
                                            if(sfilter.stock.max !== null){
                                                return prod.stock <= sfilter.stock.max && prod.stock >= sfilter.stock.min
                                            }else{
                                                return prod.stock >= sfilter.stock.min
                                            }
                                        })
                                        .filter((prod)=>{
                                            if(sfilter.tags.length !== 0){
                                                let result = false
                                                prod.product_name.toLowerCase().split("-").join(" ").split(" ").forEach(word=>{if(sfilter.tags.includes(word)){result = true}})
                                                if(result === true){return prod}
                                            }else{
                                                return prod
                                            }
                                        })
                                        .filter((prod)=>{
                                            if(sfilter.category !== null){
                                                return prod.category_id == sfilter.category
                                            }
                                            return prod
                                        })
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
            let orders = response.data.data.filter(e=>e.customer_id===cust_id)
            dispatch({
                type: "GET_ORDERS",
                payload: orders
            })
        })
}

export const clearOrders = () => {
    return {
        type: "CLEAR_ORDERS"
    }
}