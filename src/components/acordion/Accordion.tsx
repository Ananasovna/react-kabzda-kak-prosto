import React from "react";
import {AccordionBody} from "./AccordionBody";
import {AccordionTitle} from "./AccordionTitle";

type AccordionPropsType = {
    title: string;
    collapsed: boolean;
}

export const Accordion = (props: AccordionPropsType) => {

    return (
        <div>
          {/*<AccordionTitle title={props.title}/>*/}
          {!props.collapsed && <AccordionBody/>}
        </div>
    )

}

