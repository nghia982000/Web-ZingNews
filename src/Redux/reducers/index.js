import { INIT_STATE } from '../state'
import produce from "immer"
import {
    SET_LOADING_STEP,
    SAVE_ALL_NEWS,
    SAVE_LOAD_DETAIL_NEWS ,
    SAVE_ALL_BOOK,
    SAVE_LOAD_DETAIL_BOOK
} from '../constants'

export default function newsReducers(state=INIT_STATE,action){
    return produce(state,(draft)=>{
        switch(action.type){
            case SET_LOADING_STEP:
                draft.isLoading=action.payload
                break
            case SAVE_ALL_NEWS:
                console.log(action.payload)
                console.log('Save data in state')
                draft.news.data=action.payload
                break
            case SAVE_ALL_BOOK:
                console.log(action.payload)
                console.log('Save data in state')
                draft.book.data=action.payload
                break
            case SAVE_LOAD_DETAIL_NEWS:
                console.log(action.payload)
                console.log('Save data in state')
                draft.dataDetailNews=action.payload
                break
            case SAVE_LOAD_DETAIL_BOOK:
                console.log(action.payload)
                console.log('Save data in state')
                draft.dataDetailBook=action.payload
                break
            default:
                return state
        }
    })
}