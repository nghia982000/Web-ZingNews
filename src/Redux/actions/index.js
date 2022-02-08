import{
    SET_LOADING_STEP,
    GET_ALL_NEWS,
    SAVE_ALL_NEWS,
    UPDATE_NEWS,
    LOAD_DETAIL_NEWS,
    SAVE_LOAD_DETAIL_NEWS,
    CREATE_NEWS,
    DELETE_NEWS,

    GET_ALL_BOOK,
    SAVE_ALL_BOOK,
    UPDATE_BOOK,
    CREATE_BOOK,
    DELETE_BOOK,
    LOAD_DETAIL_BOOK,
    SAVE_LOAD_DETAIL_BOOK,

    LOGIN
} from '../constants'
export function setLoadingStep(payload){
    return{
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

export const asyncUpdateNews = (dispatch) => (payload) =>
  new Promise((resolve) =>
    dispatch({ type: UPDATE_NEWS, payload, resolve })
)

export const asyncDeleteNews = (dispatch) => (payload) =>
  new Promise((resolve) =>
    dispatch({ type: DELETE_NEWS, payload, resolve })
)

export const asyncCreateNews = (dispatch) => (payload) =>
  new Promise((resolve) =>
    dispatch({ type: CREATE_NEWS, payload, resolve })
)

export const asyncLoadDetailNews = (dispatch) => (payload) =>
  new Promise((resolve) =>
    dispatch({ type: LOAD_DETAIL_NEWS, payload, resolve })
)
export function saveLoadDetailNews(payload){
    return{
        type: SAVE_LOAD_DETAIL_NEWS,
        payload,
    }
}
//----------------------------------------------------------------------------------------------------
export function getAllBook(payload){
    return{
        type: GET_ALL_BOOK,
        payload,
    }
}
export function saveAllBook(payload){
    return{
        type: SAVE_ALL_BOOK,
        payload,
    }
}
export const asyncUpdateBook = (dispatch) => (payload) =>
  new Promise((resolve) =>
    dispatch({ type: UPDATE_BOOK, payload, resolve })
)

export const asyncDeleteBook = (dispatch) => (payload) =>
  new Promise((resolve) =>
    dispatch({ type: DELETE_BOOK, payload, resolve })
)

export const asyncCreateBook = (dispatch) => (payload) =>
  new Promise((resolve) =>
    dispatch({ type: CREATE_BOOK, payload, resolve })
)

export const asyncLoadDetailBook = (dispatch) => (payload) =>
  new Promise((resolve) =>
    dispatch({ type: LOAD_DETAIL_BOOK, payload, resolve })
)
export function saveLoadDetailBook(payload){
    return{
        type: SAVE_LOAD_DETAIL_BOOK,
        payload,
    }
}

//-----------------------------------------------------------------------------------------
export const asyncLogin = (dispatch) => (payload) =>
  new Promise((resolve) =>
    dispatch({ type: LOGIN, payload, resolve })
)