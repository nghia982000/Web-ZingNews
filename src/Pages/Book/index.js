import React, { useEffect, useState } from 'react'
import './style.scss'
import Item from '../../Components/Item'

import * as actions from './stores/actions'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { selectLoading, selectBook } from './stores/selectors'

import {
    Spin
} from 'antd'

const Book = ({ loading, listBook, getAllBook }) => {
    const [dataTop, setDataTop] = useState([])
    const [dataBottom, setDataBottom] = useState([])

    useEffect(() => {
        console.log('Event')
        getAllBook()
    }, [])

    useEffect(() => {
        console.log('event2')
        setDataTop(listBook.filter(news => {
            return news.type === 'top'
        }))
        setDataBottom(listBook.filter(news => {
            return news.type === 'bottom'
        }))
    }, [listBook])



    return (
        <div className="pageBook">
            <div className="pageBookHeader">
                Sách hay
            </div>
            <hr></hr>
            <div className="pageBookContainer">
                <div className='pageBookContent'>
                    <div className="pageBookContentTop">
                        {
                            (
                                dataTop.map((item, index) => {
                                    return (
                                        <React.Fragment>
                                            <Item
                                                button={'contentLeftV2'}
                                                key={index}
                                                img={item.img}
                                                title={item.title}
                                                content={item.content}
                                                id={item.id}
                                                type='book'
                                            />
                                        </React.Fragment>
                                    )
                                })
                            )
                        }
                    </div>
                    <div className="pageBookContentBottom">
                        {
                            (
                                dataBottom.map((item, index) => {
                                    return (
                                        <React.Fragment>
                                            <Item
                                                button={'contentRight'}
                                                key={index}
                                                img={item.img}
                                                title={item.title}
                                                id={item.id}
                                                type='book'
                                            />
                                        </React.Fragment>
                                    )
                                })
                            )
                        }
                    </div>
                </div>
                <div className="pageBookAdv">
                    <img src="./img/b1cf371f-a004-4e4e-a2f2-087acb2e48de.jpg" alt='' />
                </div>
            </div>
            {loading && (
                <div className="loading">
                    <Spin size="large" />
                </div>
            )
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    loading: selectLoading,
    listBook: selectBook,
})
const mapDispatchToProps = (dispatch) => ({
    getAllBook: (payload) => dispatch(actions.getAllBook(payload))
})
const withConnect = connect(mapStateToProps, mapDispatchToProps)
export default compose(withConnect)(Book)

