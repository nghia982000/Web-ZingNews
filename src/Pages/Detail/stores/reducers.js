import { INIT_STATE } from './states'
import produce from "immer"
import {
    SAVE_LOAD_DETAIL_BOOK,
    SAVE_LOAD_DETAIL_NEWS
} from './constants'
export default function detailReducers(state = INIT_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case SAVE_LOAD_DETAIL_BOOK:
                console.log(action.payload)
                draft.dataDetailBook = action.payload
                break
            case SAVE_LOAD_DETAIL_NEWS:
                draft.dataDetailNews = action.payload
                break
            default:
                return state
        }
    })
}