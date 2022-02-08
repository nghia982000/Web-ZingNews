import { INIT_STATE } from './states'
import produce from "immer"
import {
    SET_LOADING_STEP,
    SAVE_ALL_NEWS
} from './constants'
export default function newsReducers(state = INIT_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case SET_LOADING_STEP:
                draft.isLoading=action.payload
                break
            case SAVE_ALL_NEWS:
                draft.news=action.payload
                break
            default:
                return state
        }
    })
}