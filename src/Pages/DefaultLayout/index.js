import React from 'react'
import Header from '../../Components/Header'
import Home from '../Home'
import Book from '../Book'
import Detail from '../Detail'
import EmptyPage from '../EmptyPage'
import { Routes, Route } from "react-router-dom"


const DefaultLayout = () => {

    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/book" element={<Book />}/>
                <Route path="/detail/:id" element={<Detail />}/>
                <Route path="*" element={<EmptyPage />} />
            </Routes>
        </>
    )
}

export default DefaultLayout
