import { takeLatest, call, put } from 'redux-saga/effects'
import {
    setLoadingStep,
    saveAllNews, 
    saveLoadDetailNews,
} from './actions'
import * as api from "../../../../Api"
import {
    GET_ALL_NEWS,
    UPDATE_NEWS,
    CREATE_NEWS,
    DELETE_NEWS,
    LOAD_DETAIL_NEWS,
} from './constants'
function* getNewsSaga() {
    console.log('saga')
    yield put(setLoadingStep(true))
    try {
        console.log('call api')
        const posts = yield call(api.getListNews)   
        console.log(posts.data)
        yield put(saveAllNews(posts.data))
        yield put(setLoadingStep(false))
    } catch (error) {
        console.log(error)
        yield put(setLoadingStep(false))
    }
}

function* updateNewsSaga({ payload, resolve }) {
    try {
        const response = yield call(api.updateNews, payload)
        resolve(response)
    } catch (err) {
        console.error(err)
        resolve(null)
    }
}
function* deleteNewsSaga({ payload, resolve }) {
    try {
        const response = yield call(api.deleteNews, payload)
        resolve(response)
    } catch (err) {
        console.error(err)
        resolve(null)
    }
}

function* createNewsSaga({ payload, resolve }) {
    try {
        const response = yield call(api.createNews, payload)
        resolve(response)
    } catch (err) {
        console.error(err)
        resolve(null)
    }
}

function* loadDetailNewsSaga({ payload, resolve }) {
    try {
        console.log(payload)
        const response = yield call(api.loadDetailNews, payload)
        resolve(response)
        yield put(saveLoadDetailNews(response.data))
    } catch (err) {
        console.error(err)
        resolve(null)
    }
}


export function* getNews(){
    console.log("sagas2")
    yield takeLatest(GET_ALL_NEWS, getNewsSaga)
}
export function* updateNews(){
    yield takeLatest(UPDATE_NEWS, updateNewsSaga)
}
export function* createNews(){
    yield takeLatest(CREATE_NEWS, createNewsSaga)
}
export function* deleteNews(){
    yield takeLatest(DELETE_NEWS, deleteNewsSaga)
}
export function* loadDetailNews(){
    yield takeLatest(LOAD_DETAIL_NEWS, loadDetailNewsSaga)
}