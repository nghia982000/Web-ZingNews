import {
    SET_LOADING_STEP,
    GET_ALL_NEWS,
    SAVE_ALL_NEWS
} from './constants'
export function setLoadingStep(payload) {
    return {
        type: SET_LOADING_STEP,
        payload,
    }
}
export function getAllNews(payload){
    return{
        type: GET_ALL_NEWS,
        payload,
    }
}

export function saveAllNews(payload){
    return{
        type: SAVE_ALL_NEWS,
        payload,
    }
}

