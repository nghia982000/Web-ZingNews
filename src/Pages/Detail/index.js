import React,{useEffect,useState} from 'react'
import './style.scss'
import { useParams } from "react-router-dom"

import * as actions from './stores/actions'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {selectDetailBook, selectDetailNews} from './stores/selectors'

const Detail = ({detailbook,detailnews,asynLoadDetailBook,asynLoadDetailNews}) => {
    const [data,setData]=useState({})
    let { id } = useParams()
    let type = (new URLSearchParams(window.location.search)).get("type")

    useEffect( async() => {
        if(type === "news"){
            const data = await asynLoadDetailNews(id)
            setData(data.data)

        }
        if(type === "book"){
            const data = await asynLoadDetailBook(id)
            setData(data.data)
        }
    },[])
    return (
        <>
            <div className="articleDetails">
                <div className="titleDetail">
                    <h1>{data.title}</h1>
                </div>
                <div className="timeDetail">
                    <p>Thu Huệ - Thứ ba, 11/1/2022 14:53 (GMT+7)</p>
                </div>
                <div className="titleHeighlight">
                    <b>{data.description}</b>
                </div>
                <div className="contentDetail">
                    {data.content}
                </div>
                <div className="pictureDetail">
                    <div className="imageDetail" style={{ backgroundImage: `url(${data.img})` }}></div>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = createStructuredSelector({
    detailbook: selectDetailBook,
    detailnews: selectDetailNews,
})
const mapDispatchToProps = (dispatch) => ({
    asynLoadDetailBook: (payload) => actions.asyncLoadDetailBook(dispatch)(payload),
    asynLoadDetailNews: (payload) => actions.asyncLoadDetailNews(dispatch)(payload)
})
const withConnect = connect(mapStateToProps,mapDispatchToProps)
export default compose(withConnect)(Detail)
