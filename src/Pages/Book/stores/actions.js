import {
    SET_LOADING_STEP,
    GET_ALL_BOOK,
    SAVE_ALL_BOOK,
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