import * as React from 'react'
import { FC, useState, ChangeEvent } from 'react'

const Demo: FC = () => {
    // const [text, setText] = useState<string>('hello')
    // function handleChange(event: ChangeEvent<HTMLInputElement>) {
    //     setText(event.target.value)
    // }

    // const [text, setText] = useState<string>('hello')
    // function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    //     setText(event.target.value)
    // }
    // function getHtml() {
    //     return {
    //         __html: text.replaceAll('\n', '<br>')
    //     }
    // }

    // const [gender, setGender] = useState('male')
    // function handleChange(event: ChangeEvent<HTMLInputElement>) {
    //     setGender(event.target.value)
    // }

    // const [checked, setChecked] = useState(false)
    // function toggleChecked() {
    //     setChecked(!checked)
    // }

    // const [selectedCityList, setSelectedCityList] = useState<string[]>([])
    // function handleCityChange(event: ChangeEvent<HTMLInputElement>) {
    //     const city = event.target.value
    //     if (selectedCityList.includes(city)) {
    //         setSelectedCityList(
    //             selectedCityList.filter(c => {
    //                 if (c === city) { return false }
    //                 return true
    //             })
    //         )
    //     } else {
    //         setSelectedCityList(selectedCityList.concat(city))
    //     }
    // }

    // const [lang, setLang] = useState('js')
    // function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    //     setLang(event.target.value)
    // }

    const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault() // 阻止默认提交
        // 自己提交数据
    }
    return (
        <>
            <p>Form elements demo</p>
            <div>
                {/* <input value={text} onChange={handleChange} />
                <button onClick={() => { console.log(text) }}>打印</button> */}
                {/* <textarea value={text} onChange={handleChange}></textarea>
                <p dangerouslySetInnerHTML={getHtml()}></p>
                <div>{text.replaceAll('\n', '<br>')}</div> */}
                {/* <input type="radio" id="option1" name="radios" value="male" checked={gender === 'male'} onChange={handleChange} />
                <label htmlFor="option1">male</label>
                <br />
                <input type="radio" id="option2" name="radios" value="female" checked={gender === 'female'} onChange={handleChange} />
                <label htmlFor="option2">female</label>
                <p>{gender}</p> */}
                {/* <label htmlFor="checkbox1">Checkbox 1</label>
                <input type="checkbox" id="checkbox1" checked={checked} onChange={toggleChecked} />
                <p>{checked.toString()}</p> */}
                {/* <label htmlFor="checkbox1">北京</label>
                <input
                    type="checkbox"
                    id="checkbox1"
                    name="checkbox1"
                    value="beijing"
                    checked={selectedCityList.includes('beijing')}
                    onChange={handleCityChange}
                />
                <label htmlFor="checkbox2">上海</label>
                <input
                    type="checkbox"
                    id="checkbox2"
                    name="checkbox2"
                    value="shanghai"
                    checked={selectedCityList.includes('shanghai')}
                    onChange={handleCityChange}
                />
                <label htmlFor="checkbox3">广州</label>
                <input
                    type="checkbox"
                    id="checkbox3"
                    name="checkbox3"
                    value="guangzhou"
                    checked={selectedCityList.includes('guangzhou')}
                    onChange={handleCityChange}
                />
                <p>{selectedCityList}</p>
                <input type="hidden" name="cities" value={JSON.stringify(selectedCityList)} /> */}

            </div>
            {/* <div>
                <select
                    id="cities"
                    name="cities"
                    value={lang}
                    onChange={handleChange}
                >
                    <option value="js">JS</option>
                    <option value="java">Java</option>
                    <option value="css">Css</option>
                </select>
                <p>{lang}</p>
            </div> */}
            <div>
                <form action="/api/post" onSubmit={handleSubmit}>
                    <input type="text" name='k1' value='v1' />
                    <br />
                    <textarea name='k2' value='v2' />
                    <br />
                    <input type="hidden" name='k3' value='v3' />
                    <button type='submit'>submit</button>
                </form>
            </div>
        </>
    )
}

export default Demo
