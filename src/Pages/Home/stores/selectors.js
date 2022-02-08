import { INIT_STATE } from "./states";
import { createSelector } from "reselect";

const selectData = (state) => state.newsReducers || INIT_STATE
const selectLoading = createSelector(selectData, (state) => state.isLoading)
const selectNews = createSelector(selectData, (state) => state.news)

export {
    selectLoading,
    selectNews,
}