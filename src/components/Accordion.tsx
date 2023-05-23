import React from "react";
import {AccordionBody} from "./AccordionBody";
import {AccordionTitle} from "./AccordionTitle";

type AccordionProps = {
    title: string;
}

export const Accordion = (props: AccordionProps) => {
    console.log('Accordion');
    return <div>
        <AccordionTitle title={props.title}/>
        <AccordionBody />
    </div>
}

