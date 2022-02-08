import { takeLatest, call, put } from 'redux-saga/effects'
import {
    saveLoadDetailBook,
    saveLoadDetailNews
} from './actions'
import * as api from "../../../Api"
import {
    LOAD_DETAIL_BOOK,
    LOAD_DETAIL_NEWS
} from './constants'

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

export function* sagaDetailBook() {
    yield takeLatest(LOAD_DETAIL_BOOK, loadDetailBookSaga)
}
export function* sagaDetailNews() {
    yield takeLatest(LOAD_DETAIL_NEWS, loadDetailNewsSaga)
}
