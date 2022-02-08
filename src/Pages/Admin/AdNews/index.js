import React, { useEffect, useState } from 'react'

import * as actions from './stores/actions'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { selectLoading, selectNews } from './stores/selectors'

import Table from '../Table'

const AdNews = ({
    getAllNews,
    listNews,
    loading,
    asynUpdateNews,
    asynLoadDetailNews,
    asynCreateNews,
    asynDeleteNews
}) => {

    return (
        <>  
            <Table
                getAllData={getAllNews}
                listData={listNews}
                loading={loading}
                asynUpdateData={asynUpdateNews}
                asynLoadDetailData={asynLoadDetailNews}
                asynCreateData={asynCreateNews}
                asynDeleteData={asynDeleteNews}
                name='News'
            />
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    loading: selectLoading,
    listNews: selectNews,
})
const mapDispatchToProps = (dispatch) => ({
    getAllNews: (payload) => dispatch(actions.getAllNews(payload)),
    asynUpdateNews: (payload) => actions.asyncUpdateNews(dispatch)(payload),
    asynDeleteNews: (payload) => actions.asyncDeleteNews(dispatch)(payload),
    asynLoadDetailNews: (payload) => actions.asyncLoadDetailNews(dispatch)(payload),
    asynCreateNews: (payload) => actions.asyncCreateNews(dispatch)(payload),
})
const withConnect = connect(mapStateToProps, mapDispatchToProps)
export default compose(withConnect)(AdNews)
