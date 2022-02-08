import React, { useState, useEffect } from 'react'
import './style.scss'
import { NavLink, useNavigate } from "react-router-dom"
import 'antd/dist/antd.min.css'
import {
    SearchOutlined,
    UserOutlined,
    LogoutOutlined,
    EllipsisOutlined,
    SettingOutlined,
    CheckCircleOutlined,
    CloseOutlined
} from "@ant-design/icons"
import { notification } from 'antd'
const Header = () => {
    const navigate = useNavigate()
    const [active, setActive] = useState(false)
    const [menu, setMenu] = useState(false)
    const SignOut = () => {
        sessionStorage.removeItem('User')
        navigate("/")
        setActive(false)
        notification.open({
            message: 'Đăng xuất thành công',
            icon: <CheckCircleOutlined style={{ color: "green" }} />,
        })
    }
    useEffect(() => {
        var loggedInUser = sessionStorage.getItem("User")
        if (loggedInUser !== null) {
            setActive(true)
        }
    }, [])
    return (
        <React.Fragment>
            <div className="header">
                <div className="menuIpadMobile">
                    <EllipsisOutlined style={{ fontSize: '30px' }} onClick={() => setMenu(true)} />
                </div>
                <div className="headerLogo">
                    <img src="./img/logozingnews.png" alt="" onClick={() => navigate("/")} />
                    <p>TRI THỨC TRỰC TUYẾN</p>
                </div>
                <div className="headerNavbar">
                    <NavLink end to="/" >Home</NavLink>
                    <NavLink end to="/book" >Sách</NavLink>
                    <NavLink end to="*">Xã hội</NavLink>
                    <NavLink end to="*">Thế giới</NavLink>
                    <NavLink end to="*">Kinh doanh</NavLink>
                    <NavLink end to="*">Công nghệ</NavLink>
                    <NavLink end to="*">Thể thao</NavLink>
                    <NavLink end to="*">Sức khỏe</NavLink>
                    <NavLink end to="*">Giải trí</NavLink>
                    <NavLink end to="*">Đời sống</NavLink>
                </div>
                <div className="headerUser">
                    <SearchOutlined className="iconHeader" />
                    {
                        !active && <UserOutlined className="iconHeader login" onClick={() => (navigate("/login"))} />
                    }
                    {
                        active && <>
                            <LogoutOutlined className="iconHeader logOut" onClick={SignOut} />
                            <SettingOutlined className="iconHeader admin" onClick={() => (navigate("/admin"))} />
                        </>
                    }
                    <div className='notiAdmin'>
                        Admin
                    </div>
                    <div className='notiLogOut'>
                        Đăng xuất
                    </div>
                    <div className='notiLogIn'>
                        Đăng nhập
                    </div>
                </div>
            </div>
            {
                menu && (
                    <div className="menutab">
                        <CloseOutlined onClick={() => setMenu(false)} />
                        <NavLink end to="/" >Home</NavLink>
                        <NavLink end to="/book" >Sách</NavLink>
                        <NavLink end to="*">Xã hội</NavLink>
                        <NavLink end to="*">Thế giới</NavLink>
                        <NavLink end to="*">Kinh doanh</NavLink>
                        <NavLink end to="*">Công nghệ</NavLink>
                        <NavLink end to="*">Thể thao</NavLink>
                        <NavLink end to="*">Sức khỏe</NavLink>
                        <NavLink end to="*">Giải trí</NavLink>
                        <NavLink end to="*">Đời sống</NavLink>
                    </div>
                )
            }
        </React.Fragment>
    )
}

export default Header
