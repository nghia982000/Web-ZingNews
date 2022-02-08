import { INIT_STATE } from "./states";
import { createSelector } from "reselect";

const selectData = (state) => state.bookReducers || INIT_STATE
const selectLoading = createSelector(selectData, (state) => state.isLoading)
const selectBook = createSelector(selectData, (state) => state.book)

export {
    selectLoading,
    selectBook,
}