import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import React, {useState} from "react";

type AccordionPropsType = {
    title: string;
}

export const SelfControlledAccordion = (props: AccordionPropsType) => {

    const [collapsed, setCollapsed] = useState(true)

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div>
            <AccordionTitle title={props.title}/>
            <button onClick={toggleCollapsed}>Toggle</button>
            {!collapsed && <AccordionBody/>}

        </div>
    )

}