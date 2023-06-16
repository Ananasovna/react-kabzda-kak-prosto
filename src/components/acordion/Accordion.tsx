import React from "react";
import {AccordionBody} from "./AccordionBody";
import {AccordionTitle} from "./AccordionTitle";

type AccordionPropsType = {
    title: string,
    collapsed: boolean,
    callBack: () => void,
}

export const Accordion = (props: AccordionPropsType) => {

    return (
        <div>
          <AccordionTitle title={props.title} callBack={props.callBack}/>
          {!props.collapsed && <AccordionBody/>}
        </div>
    )

}

