import {ItemType} from "../acordion/Accordion";
import {useState} from "react";


type SelectPropsType = {
    value: any
    onClick: (value: any) => void
    items: ItemType[]
}

export const Select = ({value, onClick, items}: SelectPropsType) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    }

    const onClickHandler = (el: ItemType) => {
        onClick(el.value);
        toggleCollapsed();
    }

    const getUsers = () => {
        return items.map(el => <div onClick={() => onClickHandler(el)} key={el.value}>{`${el.value}. ${el.title}`}</div>)
    }

    return (
        <div>
            <div onClick={toggleCollapsed}>{value}</div>
            {collapsed && getUsers()}
        </div>
    )
}