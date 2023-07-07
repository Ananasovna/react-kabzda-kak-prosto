import {Select} from "./Select";
import {useState} from "react";


export default {
    title: 'Select stories',
    component: Select
}

const users = [
    {title: 'Dimych', value: 1},
    {title: 'Anna', value: 2},
    {title: 'Elena', value: 3},
    {title: 'Nikolay', value: 4},
]


export const SelectChangingMode = () => {
    const [selectValue, setSelectValue] = useState(undefined)

    return (
        <Select value={selectValue} onClick={(value) => setSelectValue(value)} items={users}/>
    )
}