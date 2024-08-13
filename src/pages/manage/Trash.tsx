import React, { FC, useState } from 'react'
import { useTitle } from 'ahooks'
import { Typography, Empty, Table, Tag, Space, Button, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import styles from './common.module.scss'
import ListSearch from '../../components/ListSearch'

const { confirm } = Modal
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



const Trash: FC = () => {
    useTitle('imooc问卷 - 回收站')
    const [questionList, setQuestionList] = useState(rawQuestionList)
    const [selectedIds, setSelectedIds] = useState<string[]>([])

    const tableColumns = [
        {
            title: '标题',
            dataIndex: 'title',
            // key: 'title', // 列key 默认取 dataIndex的值
        },
        {
            title: '是否发布',
            dataIndex: 'isPublished',
            render: (isPublished: boolean) => {
                return isPublished ? <Tag color='processing'>已发布</Tag> : <Tag>未发布</Tag>
            }
        },
        {
            title: '答卷',
            dataIndex: 'answerCount',
        },
        {
            title: '创建时间',
            dataIndex: 'createAt',
        },
    ]

    function del() {
        confirm({
            title: '确认彻底删除该问卷？',
            icon: <ExclamationCircleOutlined />,
            content: '删除后不可找回',
            onOk: () => {
                alert(`删除 ${JSON.stringify(selectedIds)}`)
            }
        })
    }

    const TableElem = <>
        <div style={{ marginBottom: '16px' }}>
            <Space>
                <Button type='primary' disabled={selectedIds.length === 0}>恢复</Button>
                <Button danger disabled={selectedIds.length === 0} onClick={del}>彻底删除</Button>
            </Space>
        </div>
        <Table
            dataSource={questionList}
            columns={tableColumns}
            pagination={false}
            rowKey={q => q._id}
            rowSelection={{
                // type: 'radio',
                type: 'checkbox',
                onChange: (selectedRowKeys, selectedRows) => {
                    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
                    setSelectedIds(selectedRowKeys as string[])
                },
                getCheckboxProps: (record) => ({
                    disabled: record.title === 'Disabled User',
                    // Column configuration not to be checked
                    name: record.title,
                }),
            }}
        />

    </>
    return <>
        <div className={styles.header}>
            <div className={styles.left}>
                <Title level={3}>回收站</Title>
            </div>
            <div className={styles.right}>
                <ListSearch />
            </div>
        </div>
        <div className={styles.content}>
            {questionList.length === 0 && <Empty description='暂无数据' />}
            {
                questionList.length > 0 && (TableElem)
            }
        </div>
        <div className={styles.footer}>loadmore...</div>
    </>
}

export default Trash