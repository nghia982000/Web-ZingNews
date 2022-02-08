import {
    LOAD_DETAIL_BOOK,
    SAVE_LOAD_DETAIL_BOOK,
    LOAD_DETAIL_NEWS,
    SAVE_LOAD_DETAIL_NEWS,
} from './constants'
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