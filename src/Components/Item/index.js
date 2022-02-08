import React,{memo}from 'react'
import './style.scss'
import { NavLink } from "react-router-dom"

const Item = ({ button, title, img, content, description,id,type}) => {
    console.log('This is Item page!')
    return (
        <div className={button}>
            <div className="frame">
                <div className="image" style={{ backgroundImage: `url(${img})` }}></div>
            </div>
            <div className="content">
                <div className="tilte">
                    <NavLink to={`/detail/${id}?type=${type}`}>{title}</NavLink>
                </div>
                <div className="description">
                    <div>
                        <p>{content}</p>
                        <ul>
                            <li>{description}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Item)
