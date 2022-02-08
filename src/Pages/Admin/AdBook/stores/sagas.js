import { takeLatest, call, put } from 'redux-saga/effects'
import {
    setLoadingStep,
    saveAllBook,
    saveLoadDetailBook,
} from './actions'
import * as api from "../../../../Api"
import {
    GET_ALL_BOOK,
    UPDATE_BOOK,
    CREATE_BOOK,
    DELETE_BOOK,
    LOAD_DETAIL_BOOK
} from './constants'
function* getBookSaga() {
    yield put(setLoadingStep(true))
    try {
        const books = yield call(api.getListBook)
        console.log(books.data)
        
        yield put(saveAllBook(books.data))

        yield put(setLoadingStep(false))
    } catch (error) {
        console.log(error)
        yield put(setLoadingStep(false))
    }
}

function* updateBookSaga({ payload, resolve }) {
    try {
        const response = yield call(api.updateBook, payload)
        resolve(response)
    } catch (err) {
        console.error(err)
        resolve(null)
    }
}
function* deleteBookSaga({ payload, resolve }) {
    try {
        const response = yield call(api.deleteBook, payload)
        resolve(response)
    } catch (err) {
        console.error(err)
        resolve(null)
    }
}

function* createBookSaga({ payload, resolve }) {
    try {
        const response = yield call(api.createBook, payload)
        resolve(response)
    } catch (err) {
        console.error(err)
        resolve(null)
    }
}

function* loadDetailBookSaga({ payload, resolve }) {
    try {
        const response = yield call(api.loadDetailBook, payload)
        resolve(response)
        yield put(saveLoadDetailBook(response.data))
    } catch (err) {
        console.error(err)
        resolve(null)
    }
}


export function* getBook(){
    yield takeLatest(GET_ALL_BOOK, getBookSaga)
}
export function* updateBook(){
    yield takeLatest(UPDATE_BOOK, updateBookSaga)
}
export function* createBook(){
    yield takeLatest(CREATE_BOOK, createBookSaga)
}
export function* deleteBook(){
    yield takeLatest(DELETE_BOOK, deleteBookSaga)
}
export function* loadDetailBook(){
    yield takeLatest(LOAD_DETAIL_BOOK, loadDetailBookSaga)
}