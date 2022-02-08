import { combineReducers } from "redux"
import loginReducers from "../../Pages/Login/stores/reducers"
import bookReducers from "../../Pages/Book/stores/reducers"
import newsReducers from "../../Pages/Home/stores/reducers"
import detailReducers from "../../Pages/Detail/stores/reducers"
import adBookReducers from "../../Pages/Admin/AdBook/stores/reducers"
import adNewsReducers from "../../Pages/Admin/AdNews/stores/reducers"
export default function createReducer() {
  console.log("reducers")
  const rootReducer = combineReducers({
    loginReducers,
    bookReducers,
    newsReducers,
    detailReducers,
    adBookReducers,
    adNewsReducers
  })
  return rootReducer
}
