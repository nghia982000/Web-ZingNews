import { INIT_STATE } from "./states";
import { createSelector } from "reselect";

const selectData = (state) => state.adNewsReducers || INIT_STATE
const selectLoading = createSelector(selectData, (state) => state.isLoading)
const selectNews = createSelector(selectData, (state) => state.news)
const selectDetailNews = createSelector(selectData, (state) => state.dataDetailNews)

export {
    selectLoading,
    selectNews,
    selectDetailNews,
}