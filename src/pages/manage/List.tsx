/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState } from 'react'
import styles from './common.module.scss'
import QuestionCard from '../../components/QuestionCard'
import { useSearchParams } from 'react-router-dom'
import { Typography } from 'antd'
import { useTitle } from 'ahooks'
import ListSearch from '../../components/ListSearch'
const { Title } = Typography

const rawQuestionList = [
    {
        _id: 'q1', title: 'question01', isPublished: false, isStar: true, answerCount: 5, createAt: '3月10日 13:56'
    },
    {
        _id: 'q2', title: 'question02', isPublished: true, isStar: true, answerCount: 3, createAt: '10月10日 13:56'
    },
    {
        _id: 'q3', title: 'question03', isPublished: false, isStar: false, answerCount: 2, createAt: '10月11日 13:56'
    },
    {
        _id: 'q4', title: 'question04', isPublished: true, isStar: false, answerCount: 7, createAt: '5月10日 13:56'
    },
]

const List: FC = () => {
    useTitle('imooc问卷 - 我的问卷')
    const [searchParams] = useSearchParams()
    console.log('keyword', searchParams.get('keyword'))
    const [questionList, setQuestionList] = useState(rawQuestionList)

    return <>
        <div className={styles.header}>
            <div className={styles.left}>
                <Title level={3}>我的问卷</Title>
            </div>
            <div className={styles.right}>
                <ListSearch />
            </div>
        </div>
        <div className={styles.content}>
            {
                questionList.length > 0 &&
                questionList.map((q) => {
                    const { _id } = q
                    return <QuestionCard key={_id} {...q} />
                })
            }
        </div>
        <div className={styles.footer}>loadmore...</div>
    </>
}

export default List