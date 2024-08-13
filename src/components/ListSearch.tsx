import * as React from 'react'
import { FC, ChangeEvent, useState, useEffect } from 'react'
import { Input, Space } from 'antd'
import { LIST_SEARCH_PARAM_KEY } from '../constant'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

const { Search } = Input

function ListSearch() {
    const nav = useNavigate()
    const { pathname } = useLocation()

    const [value, setValue] = useState('')
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value)
    }

    // url 路由查询逻辑
    const [searchParams] = useSearchParams()
    useEffect(() => {
        const curVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
        setValue(curVal)
    }, [searchParams])

    function handleSearch(value: string) {
        // console.log('value', value)
        nav({
            pathname,
            search: `${LIST_SEARCH_PARAM_KEY}=${value}`
        })
    }
    return (
        <>
            {/* <p>搜索</p> */}
            <Search placeholder="input search text" size='large' allowClear value={value} onChange={handleChange} onSearch={handleSearch} style={{ width: 200 }} />
        </>
    )
}

export default ListSearch