import React, { useEffect, useState } from 'react'

import * as actions from './stores/actions'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { selectLoading, selectBook } from './stores/selectors'
import Table from '../Table'

const AdBook = ({
    getAllBook,
    listBook,
    loading,
    asynUpdateBook,
    asynLoadDetailBook,
    asynCreateBook,
    asynDeleteBook
}) => {
    
    return (
        <>
            <Table
                getAllData={getAllBook}
                listData={listBook}
                loading={loading}
                asynUpdateData={asynUpdateBook}
                asynLoadDetailData={asynLoadDetailBook}
                asynCreateData={asynCreateBook}
                asynDeleteData={asynDeleteBook}
                name='Book'
            />
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    loading: selectLoading,
    listBook: selectBook,
})
const mapDispatchToProps = (dispatch) => ({
    getAllBook: (payload) => dispatch(actions.getAllBook(payload)),
    asynUpdateBook: (payload) => actions.asyncUpdateBook(dispatch)(payload),
    asynDeleteBook: (payload) => actions.asyncDeleteBook(dispatch)(payload),
    asynLoadDetailBook: (payload) => actions.asyncLoadDetailBook(dispatch)(payload),
    asynCreateBook: (payload) => actions.asyncCreateBook(dispatch)(payload),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
export default compose(withConnect)(AdBook)
