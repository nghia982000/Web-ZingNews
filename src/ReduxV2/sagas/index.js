import { all } from "redux-saga/effects"

import * as Login from "../../Pages/Login/stores/sagas"
import * as News from "../../Pages/Home/stores/sagas"
import * as Detail from "../../Pages/Detail/stores/sagas"
import * as Book from "../../Pages/Book/stores/sagas"
import * as AdBook from "../../Pages/Admin/AdBook/stores/sagas"
import * as AdNews from "../../Pages/Admin/AdNews/stores/sagas"

export default function* () {
    console.log("Sagas")
  yield all([
    Login.sagaLogin(),

    News.sagaNews(),

    Book.sagaBook(),

    Detail.sagaDetailBook(),
    Detail.sagaDetailNews(),

    AdBook.getBook(),
    AdBook.updateBook(),
    AdBook.createBook(),
    AdBook.deleteBook(),
    AdBook.loadDetailBook(),


    AdNews.getNews(),
    AdNews.updateNews(),
    AdNews.createNews(),
    AdNews.deleteNews(),
    AdNews.loadDetailNews()
  ])
}
