import {
    SET_LOADING_STEP,
    SAVE_ALL_NEWS,
    GET_ALL_NEWS,
    UPDATE_NEWS,
    LOAD_DETAIL_NEWS,
    SAVE_LOAD_DETAIL_NEWS,
    CREATE_NEWS,
    DELETE_NEWS,
} from './constants'
export function setLoadingStep(payload) {
    return {
        type: SET_LOADING_STEP,
        payload,
    }
}
export function getAllNews(payload){
    console.log('action')
    console.log(payload)
    return{
        type: GET_ALL_NEWS,
        payload,
    }
}

export function saveAllNews(payload){
    console.log('action save')
    return{
        type: SAVE_ALL_NEWS,
        payload,
    }
}

export const asyncUpdateNews = (dispatch) => (payload) =>
  new Promise((resolve) =>
    dispatch({ 
        type: UPDATE_NEWS, 
        payload, resolve 
    })
)

export const asyncDeleteNews = (dispatch) => (payload) =>
  new Promise((resolve) =>
    dispatch({ 
        type: DELETE_NEWS, 
        payload, resolve 
    })
)

export const asyncCreateNews = (dispatch) => (payload) =>
  new Promise((resolve) =>
    dispatch({ 
        type: CREATE_NEWS, 
        payload, resolve 
    })
)

export const asyncLoadDetailNews = (dispatch) => (payload) =>
  new Promise((resolve) =>
    dispatch({ 
        type: LOAD_DETAIL_NEWS, 
        payload, resolve 
    })
)
export function saveLoadDetailNews(payload){
    return{
        type: SAVE_LOAD_DETAIL_NEWS,
        payload,
    }
}