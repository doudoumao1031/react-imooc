import React, { FC } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Typography } from 'antd'
import { MANAGE_INDEX_PATHNAME } from '../router'
import styles from './Home.module.scss'

const { Title, Paragraph } = Typography

const Home: FC = () => {
    const nav = useNavigate()
    // function clickHandler() {
    //     nav('/login')
    // }
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                {/* <button onClick={clickHandler}>登录</button>
                <Link to='/register?a==11'>注册</Link> */}
                <Title>问卷调查 ｜ 在线投票</Title>
                <Paragraph>已4累计创建问卷 100 份, 发布问卷 90 份, 收到答卷 980 份</Paragraph>
                <div>
                    <Button type='primary' onClick={() => { nav(MANAGE_INDEX_PATHNAME) }}>开始使用</Button>
                </div>
            </div>
        </div>
    )
}

export default Home