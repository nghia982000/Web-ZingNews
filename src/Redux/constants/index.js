const NS_DATA_NEWS = 'dataNews'
const SET_LOADING_STEP = `${NS_DATA_NEWS}/setGlobalLoading`

const GET_ALL_NEWS = `${NS_DATA_NEWS}/getAllNews`
const SAVE_ALL_NEWS = `${NS_DATA_NEWS}/saveAllNews`
const UPDATE_NEWS = `${NS_DATA_NEWS}/updateNews`
const CREATE_NEWS = `${NS_DATA_NEWS}/createNews`
const DELETE_NEWS = `${NS_DATA_NEWS}/deleteNews`
const LOAD_DETAIL_NEWS = `${NS_DATA_NEWS}/loadDetailNews`
const SAVE_LOAD_DETAIL_NEWS = `${NS_DATA_NEWS}/saveLoadDetailNews`

const GET_ALL_BOOK = `${NS_DATA_NEWS}/getAllBook`
const SAVE_ALL_BOOK = `${NS_DATA_NEWS}/saveAllBook`
const UPDATE_BOOK = `${NS_DATA_NEWS}/updateBook`
const CREATE_BOOK = `${NS_DATA_NEWS}/createBook`
const DELETE_BOOK = `${NS_DATA_NEWS}/deleteBook`
const LOAD_DETAIL_BOOK = `${NS_DATA_NEWS}/loadDetailBook`
const SAVE_LOAD_DETAIL_BOOK = `${NS_DATA_NEWS}/saveLoadDetailBook`

const LOGIN=`${NS_DATA_NEWS}/authenticate`

export {
    NS_DATA_NEWS,
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
}