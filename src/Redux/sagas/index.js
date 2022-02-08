import { takeLatest, call, put } from 'redux-saga/effects'
import { 
  setLoadingStep, 
  saveAllNews, 
  saveLoadDetailNews,
  saveAllBook, 
  saveLoadDetailBook,
} from '../actions'
import * as api from "../../Api"
import {
  GET_ALL_NEWS,
  UPDATE_NEWS,
  CREATE_NEWS,
  DELETE_NEWS,
  LOAD_DETAIL_NEWS,
  GET_ALL_BOOK,
  UPDATE_BOOK,
  CREATE_BOOK,
  DELETE_BOOK,
  LOAD_DETAIL_BOOK,
  LOGIN
} from '../constants'
function* getNewsSaga() {
  console.log('Loading true')
  yield put(setLoadingStep(true))
  try {
    console.log('Middleware')
    const posts = yield call(api.getListNews)
    console.log('Call Api')
    yield put(saveAllNews(posts.data))
    console.log('Loading false')
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
//------------------------------------------------------------------
function* getBookSaga() {
  console.log('Loading true')
  yield put(setLoadingStep(true))
  try {
    console.log('Middleware')
    const books = yield call(api.getListBook)
    console.log('Call Api')
    yield put(saveAllBook(books.data))
    console.log('Loading false')
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
    console.log(payload)
    const response = yield call(api.loadDetailBook, payload)
    resolve(response)
    yield put(saveLoadDetailBook(response.data))
  } catch (err) {
    console.error(err)
    resolve(null)
  }
}
//---------------------------------------------------------------

function* login({ payload, resolve }) {
  try {
    const response = yield call(api.login, payload)
    resolve(response.data)
  } catch (err) {
    console.error(err)
    resolve(null)
  }
}





function* mySaga() {
  yield takeLatest(GET_ALL_NEWS, getNewsSaga)
  yield takeLatest(UPDATE_NEWS, updateNewsSaga)
  yield takeLatest(CREATE_NEWS, createNewsSaga)
  yield takeLatest(DELETE_NEWS, deleteNewsSaga)
  yield takeLatest(LOAD_DETAIL_NEWS, loadDetailNewsSaga)

  yield takeLatest(GET_ALL_BOOK, getBookSaga)
  yield takeLatest(UPDATE_BOOK, updateBookSaga)
  yield takeLatest(CREATE_BOOK, createBookSaga)
  yield takeLatest(DELETE_BOOK, deleteBookSaga)
  yield takeLatest(LOAD_DETAIL_BOOK, loadDetailBookSaga)
  
  yield takeLatest(LOGIN, login)
}
export default mySaga