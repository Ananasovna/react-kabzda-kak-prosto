import React from "react";

type AccordionTitlePropsType = {
    title: string;
}
export const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('title');
    return (
        <h3>{props.title}</h3>
    )
}