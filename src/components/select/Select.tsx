import {ItemType} from "../acordion/Accordion";
import {useState} from "react";
import {inspect} from "util";
import styles from './Select.module.css';
import {ArrowDownIcon} from "../icons/ArrowDownIcon";


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
        return items.map(el => <div className={styles.valueItem} onClick={() => onClickHandler(el)} key={el.value}>{`${el.value}. ${el.title}`}</div>)
    }


    return (
        <div className={styles.selectWrapper}>
            <div className={styles.select} onClick={toggleCollapsed}>
                <div>{value}</div>
                <div className={collapsed ? styles.icon : styles.iconRotated}><ArrowDownIcon/></div>

            </div>
            <div className={collapsed ? styles.values : styles.closedValues}>
                {getUsers()}
            </div>

        </div>
    )
}