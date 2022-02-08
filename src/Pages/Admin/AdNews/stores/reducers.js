import { INIT_STATE } from './states'
import produce from "immer"
import {
    SET_LOADING_STEP,
    SAVE_ALL_NEWS,
    SAVE_LOAD_DETAIL_NEWS ,
} from './constants'
export default function adNewsReducers(state = INIT_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case SET_LOADING_STEP:
                draft.isLoading=action.payload
                break
            case SAVE_ALL_NEWS:
                console.log('reducer')
                console.log(action.payload)
                draft.news=action.payload
                break
            case SAVE_LOAD_DETAIL_NEWS:
                draft.dataDetailNews=action.payload
                break
            default:
                return state
        }
    })
}