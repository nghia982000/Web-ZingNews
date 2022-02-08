import { INIT_STATE } from "./states";
import { createSelector } from "reselect";

const selectData = (state) => state.adBookReducers || INIT_STATE
const selectLoading = createSelector(selectData, (state) => state.isLoading)
const selectBook = createSelector(selectData, (state) => state.book)
const selectDetailBook = createSelector(selectData, (state) => state.dataDetailBook)

export {
    selectLoading,
    selectBook,
    selectDetailBook
}