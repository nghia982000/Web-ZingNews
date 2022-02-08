import {
    SET_LOADING_STEP,
    GET_ALL_BOOK,
    SAVE_ALL_BOOK,
    UPDATE_BOOK,
    CREATE_BOOK,
    DELETE_BOOK,
    LOAD_DETAIL_BOOK,
    SAVE_LOAD_DETAIL_BOOK,
} from './constants'
export function setLoadingStep(payload) {
    return {
        type: SET_LOADING_STEP,
        payload,
    }
}
export function getAllBook(payload) {
    return {
        type: GET_ALL_BOOK,
        payload,
    }
}
export function saveAllBook(payload) {
    return {
        type: SAVE_ALL_BOOK,
        payload,
    }
}
export const asyncUpdateBook = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({
            type: UPDATE_BOOK,
            payload, resolve
        })
    )

export const asyncDeleteBook = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({
            type: DELETE_BOOK,
            payload, resolve
        })
    )

export const asyncCreateBook = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({
            type: CREATE_BOOK,
            payload, resolve
        })
    )

export const asyncLoadDetailBook = (dispatch) => (payload) =>
    new Promise((resolve) =>
        dispatch({
            type: LOAD_DETAIL_BOOK,
            payload, resolve
        })
    )
export function saveLoadDetailBook(payload) {
    return {
        type: SAVE_LOAD_DETAIL_BOOK,
        payload,
    }
}