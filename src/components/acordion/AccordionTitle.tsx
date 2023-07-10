import React from "react";
import styles from './AccordionTitle.module.css';

type AccordionTitlePropsType = {
    title: string;
    callBack: () => void;
}
export const AccordionTitle = (props: AccordionTitlePropsType) => {

    return (
        <h3 className={styles.h3} onClick={(e) => props.callBack()}>{props.title}</h3>
    )
}