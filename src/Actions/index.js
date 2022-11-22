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