import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.min.css'
import './style.scss'
import AdBook from './AdBook'
import AdNews from './AdNews'
import { Layout, Menu } from 'antd'
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    BookOutlined,
    CoffeeOutlined,
    HomeOutlined
} from '@ant-design/icons'
const { Header, Sider, Content } = Layout

const Admin = () => {
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false)
    const toggle = () => {
        setCollapsed(!collapsed)
    }
    useEffect(() => {
        var loggedInUser = sessionStorage.getItem("User")
        if (loggedInUser === null) {
            window.location.href = '/login'
        }
    }, [])
    return (
        <Layout>
            <Sider className="site-layout-background" trigger={null} collapsible collapsed={collapsed}
                style={{
                    height: '100vh'
                }}>
                <div className="logo">
                    Admin

                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<CoffeeOutlined />}>
                        <Link to="/admin">Tin Tức</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<BookOutlined />}>
                        <Link to="/admin/book">Sách</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background headerAdmin" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                    <div className='backHome'>
                        <HomeOutlined onClick={() => (navigate("/"))} />
                    </div>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        overflow: 'auto',
                        height:'500px' 
                    }}
                >
                    <Routes>
                        <Route path="/book" element={<AdBook />} />
                        <Route path="/" element={<AdNews />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    )
}

export default Admin
