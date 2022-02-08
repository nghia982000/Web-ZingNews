import { takeLatest, call, put } from 'redux-saga/effects'
import {
    setLoadingStep,
    saveAllBook
} from './actions'
import * as api from "../../../Api"
import {
    GET_ALL_BOOK,
} from './constants'
function* getBookSaga() {
    console.log('saga book')
    yield put(setLoadingStep(true))
    try {
        const books = yield call(api.getListBook)
        console.log(books)
        yield put(saveAllBook(books.data))
        yield put(setLoadingStep(false))
    } catch (error) {
        yield put(setLoadingStep(false))
    }
}

export function* sagaBook() {
    yield takeLatest(GET_ALL_BOOK, getBookSaga)
}