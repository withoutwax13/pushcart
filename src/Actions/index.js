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