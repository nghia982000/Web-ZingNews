import { INIT_STATE } from './states'
import produce from "immer"
import {
    SET_LOADING_STEP,
    SAVE_ALL_BOOK,
} from './constants'
export default function bookReducers(state = INIT_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case SET_LOADING_STEP:
                draft.isLoading = action.payload
                break
            case SAVE_ALL_BOOK:
                console.log(action.payload)
                draft.book = action.payload
                break
            default:
                return state
        }
    })
}