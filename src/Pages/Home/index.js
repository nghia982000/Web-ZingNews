import React, { useEffect,useState } from 'react'
import './style.scss'
import 'antd/dist/antd.min.css'
import { AntCloudOutlined } from "@ant-design/icons"
import Item from '../../Components/Item'

import * as actions from './stores/actions'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { selectLoading, selectNews } from './stores/selectors'


import {
    Spin
} from 'antd'

const Home = ({ getAllNews, listNews, loading }) => {
    const [dataLeft,setDataLeft]=useState([])
    const [dataCenter,setDataCenter]=useState([])
    const [dataRight,setDataRight]=useState([])

    useEffect(() => {
        console.log('Event')
        getAllNews()
    }, [])

    useEffect(()=>{
        setDataLeft(listNews.filter(news =>{
            return news.type === 'left'
        }))
        setDataCenter(listNews.filter(news =>{
            return news.type === 'center'
        }))
        setDataRight(listNews.filter(news =>{
            return news.type === 'right'
        }))
    },[listNews])
    return (
        <>
            <div className="contentHeader">
                <div className="contentHeaderLeft">
                    <img src="https://static-znews.zadn.vn/images/stat.svg" alt="" />
                    <p>#Số liệu Covid-19</p>
                    <p>#Biến chủng Omicron</p>
                    <p>#Khởi nghiệp 4.0</p>
                </div>
                <div className="contentHeaderRight">
                    <p><b>TP. Hồ Chí Minh</b> 28°C / 22-32°C</p>
                    <AntCloudOutlined style={{ fontSize: '20px' }} />
                </div>
            </div>
            <div className="contentContainer">
                <div className="contentContainerLeft">
                    {(
                        dataLeft.map((item, index) => {
                            return (
                                <React.Fragment>
                                    <Item
                                        button={'contentLeft'}
                                        key={index}
                                        img={item.img}
                                        title={item.title}
                                        id={item.id}
                                        type='news'
                                    />
                                    <hr />
                                </React.Fragment>
                            )
                        })
                    )
                    }
                </div>
                <div className="contentCenterRight">
                    <div className="contentContainerCenter">
                        {
                            (
                                dataCenter.map((item, index) => {
                                    return (
                                        <React.Fragment>
                                            <Item
                                                button={'contentCenter'}
                                                key={index}
                                                img={item.img}
                                                title={item.title}
                                                content={item.content}
                                                description={item.description}
                                                id={item.id}
                                                type='news'
                                            />
                                        </React.Fragment>
                                    )
                                })
                            )
                        }
                    </div>
                    <div className="contentContainerRight">
                        {(
                            dataRight.map((item, index) => {
                                return (
                                    <React.Fragment>
                                        <Item
                                            button={'contentRight'}
                                            key={index}
                                            img={item.img}
                                            title={item.title}
                                            id={item.id}
                                            type='news'
                                        />
                                    </React.Fragment>
                                )
                            })
                        )
                        }
                    </div>
                </div>
            </div>
            {loading && (
                <div className="loading">
                    <Spin size="large" />
                </div>
            )
            }
        </>
    )
}
const mapStateToProps = createStructuredSelector({
    loading: selectLoading,
    listNews: selectNews,
})
const mapDispatchToProps = (dispatch) => ({
    getAllNews: (payload) => dispatch(actions.getAllNews(payload))
})
const withConnect = connect(mapStateToProps, mapDispatchToProps)
export default compose(withConnect)(Home)
