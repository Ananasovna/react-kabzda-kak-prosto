import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import React, {useReducer, useState} from "react";
import {ItemType} from "./Accordion";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    title: string;
    items: ItemType[]
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {

    // const [collapsed, setCollapsed] = useState(true)
    const [state, dispatch] = useReducer(reducer, {collapsed: true})

    // const toggleCollapsed = () => {
    //     setCollapsed(!collapsed);
    // }

    return (
        <div>
            <AccordionTitle title={props.title} callBack={() => dispatch({type: TOGGLE_COLLAPSED})}/>
            {!state.collapsed && <AccordionBody onClick={()=> {}} items={props.items}/>}
        </div>
    )

}