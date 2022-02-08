import { INIT_STATE } from './states'
import produce from "immer"
import {
    SET_LOADING_STEP,
    SAVE_ALL_BOOK,
    SAVE_LOAD_DETAIL_BOOK
} from './constants'
export default function adBookReducers(state = INIT_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case SET_LOADING_STEP:
                draft.isLoading = action.payload
                break
            case SAVE_ALL_BOOK:
                console.log('reducer')
                console.log(action.payload)
                draft.book = action.payload
                break
            case SAVE_LOAD_DETAIL_BOOK:
                draft.dataDetailBook = action.payload
                break
            default:
                return state
        }
    })
}