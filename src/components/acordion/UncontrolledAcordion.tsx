import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import React, {useState} from "react";

type AccordionPropsType = {
    title: string;
    onClick: (value: any) => void
}




export const UncontrolledAccordion = (props: AccordionPropsType) => {

    const [collapsed, setCollapsed] = useState(true)

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div>
            <AccordionTitle title={props.title} callBack={toggleCollapsed}/>
            {/*{!collapsed && <AccordionBody  items={props.items}/>}*/}
        </div>
    )

}