import { takeLatest, call, put } from 'redux-saga/effects'
import {
    setLoadingStep,
    saveAllNews
} from './actions'
import * as api from "../../../Api"
import {
    GET_ALL_NEWS
} from './constants'
function* getNewsSaga() {
    yield put(setLoadingStep(true))
    try {
        const posts = yield call(api.getListNews)
        console.log(posts)
        yield put(saveAllNews(posts.data))
        yield put(setLoadingStep(false))
    } catch (error) {
        console.log(error)
        yield put(setLoadingStep(false))
    }
}

export function* sagaNews() {
    yield takeLatest(GET_ALL_NEWS, getNewsSaga)
}