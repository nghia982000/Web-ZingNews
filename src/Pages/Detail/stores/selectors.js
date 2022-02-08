import { INIT_STATE } from "./states";
import { createSelector } from "reselect";

const selectData = (state) => state.detailReducers || INIT_STATE
const selectDetailBook = createSelector(selectData, (state) => state.dataDetailBook)
const selectDetailNews = createSelector(selectData, (state) => state.dataDetailNews)

export {
    selectDetailBook,
    selectDetailNews
}