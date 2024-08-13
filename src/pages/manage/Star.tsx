import React, { FC, useState } from 'react'
import styles from './common.module.scss'
import QuestionCard from '../../components/QuestionCard'
import { useSearchParams } from 'react-router-dom'
import { useTitle } from 'ahooks'
import { Typography, Empty } from 'antd'
import ListSearch from '../../components/ListSearch'

const { Title } = Typography

const rawQuestionList = [
    {
        _id: 'q1', title: 'question01', isPublished: false, isStar: true, answerCount: 5, createAt: '3月10日 13:56'
    },
    {
        _id: 'q2', title: 'question02', isPublished: true, isStar: true, answerCount: 3, createAt: '10月10日 13:56'
    },
]
// const rawQuestionList: unknown[] = []

const Star: FC = () => {
    useTitle('imooc问卷 - 星标问卷')

    const [questionList, setQuestionList] = useState(rawQuestionList)
    return <>
        <div className={styles.header}>
            <div className={styles.left}>
                <Title level={3}>星标问卷</Title>
            </div>
            <div className={styles.right}>
                <ListSearch />
            </div>
        </div>
        <div className={styles.content}>
            {questionList.length === 0 && <Empty description='暂无数据' />}
            {
                questionList.length > 0 &&
                questionList.map((q) => {
                    const { _id } = q
                    return <QuestionCard key={_id} {...q} />
                })
            }
        </div>
        <div className={styles.footer}>分页</div>
    </>
}

export default Star