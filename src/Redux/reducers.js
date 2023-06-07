import { combineReducers } from "redux"

const businesses = (state = [], action) => {
    switch (action.type) {
        case "ADD_BUSINESS":
            return [...state, action.value]
        case "REMOVE_BUSINESS":
            const copy = [...state]
            copy.splice(action.value, 1)
            return copy
        default:
            return state
    }
}

const users = (state = [], action) => {
    switch (action.type) {
        case "ADD_USER":
            return [...state, action.value]
        case "REMOVE_USER":
            const copy = [...state]
            copy.splice(action.value, 1)
            return copy
        default:
            return state
    }
}

export default combineReducers({ businesses, users })