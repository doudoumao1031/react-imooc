import { Layout } from 'antd'
import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.scss'
import UserInfo from '../components/UserInfo'
import Logo from '../components/Logo'

const { Header, Content, Footer, Sider } = Layout

const MainLayout: FC = () => {
    return (
        <Layout>
            <Header className={styles.header}>
                <div className={styles.left}>
                    <Logo />
                </div>
                <div className={styles.right}>
                    <UserInfo />
                </div>
            </Header>
            <Layout>
                <Content className={styles.main}>
                    <Outlet />
                </Content>
            </Layout>
            <Footer className={styles.footer}>
                imooc问卷 &copy; 2023 - present. Created by doudou
            </Footer>
        </Layout>
    )
}

export default MainLayout