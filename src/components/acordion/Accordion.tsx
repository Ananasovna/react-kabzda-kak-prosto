import React from "react";
import {AccordionBody} from "./AccordionBody";
import {AccordionTitle} from "./AccordionTitle";

type AccordionPropsType = {
    title: string,
    collapsed: boolean,
    callBack: () => void,
    items: ItemType[]
    onClick: (value: any) => void
}

export type ItemType = {
    title: string
    value: any
}

export const Accordion = (props: AccordionPropsType) => {

    return (
        <div>
          <AccordionTitle title={props.title} callBack={props.callBack}/>
          {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
        </div>
    )

}

