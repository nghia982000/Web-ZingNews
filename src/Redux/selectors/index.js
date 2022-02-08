import { INIT_STATE } from "../state";
import { createSelector } from "reselect";

const selectData = (state) => state || INIT_STATE
const selectLoading = createSelector(selectData, (state) => state.isLoading)
const selectNews = createSelector(selectData, (state) => state.news.data)
const selectBook = createSelector(selectData, (state) => state.book.data)
const selectDetailNews = createSelector(selectData, (state) => state.dataDetailNews)
const selectDetailBook = createSelector(selectData, (state) => state.dataDetailBook)

export { 
    selectLoading, 
    selectNews,
    selectBook,
    selectDetailNews,
    selectDetailBook
}