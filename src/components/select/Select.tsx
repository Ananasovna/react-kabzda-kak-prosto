import {ItemType} from "../acordion/Accordion";
import {KeyboardEvent, useEffect, useState} from "react";
import styles from './Select.module.css';
import {ArrowDownIcon} from "../icons/ArrowDownIcon";


type SelectPropsType = {
    value: any
    onClick: (value: any) => void
    items: ItemType[]
}

export const Select = ({value, onClick, items}: SelectPropsType) => {
    const [collapsed, setCollapsed] = useState(true);

    const setIsCollapsedTrue = () => {
        setCollapsed(true);
    }

    const setIsCollapsedFalse = () => {
        setCollapsed(false);
    }

    const onClickHandler = (el: ItemType) => {
        onClick(el.value);
        setIsCollapsedTrue();
    }

    const getUsers = () => {
        return items.map(el => <div className={`${el.value === value && styles.activeValueItem}  ${styles.valueItem}`} onClick={() => onClickHandler(el)} key={el.value}>{`${el.value}. ${el.title}`}</div>)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            setIsCollapsedFalse();
            e.key === 'ArrowDown' ? (!value && onClick(items[0].value)) : (!value && onClick(items[items.length - 1].value));
            for (let i = 0; i < items.length; i++) {
                const nextSelectedValue = e.key === 'ArrowDown' ? items[i + 1]?.value : items[i - 1]?.value;
                if (items[i].value === value && nextSelectedValue) {
                    onClick(nextSelectedValue);
                    return;
                }
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setIsCollapsedTrue();
        }
    }

    return (
        <div className={styles.selectWrapper} tabIndex={0} onKeyDown={onKeyDownHandler} onBlur={setIsCollapsedTrue}>
            <div className={styles.select} onClick={collapsed ? setIsCollapsedFalse : setIsCollapsedTrue}>
                <div>{value}</div>
                <div className={!collapsed ? styles.iconRotated : styles.icon}><ArrowDownIcon/></div>
            </div>
            <div className={collapsed ? styles.closedValues : styles.values}>
                {!collapsed && getUsers()}
            </div>

        </div>
    )
}