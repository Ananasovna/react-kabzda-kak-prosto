import React from "react";

type AccordionTitleProps = {
    title: string;
}
export const AccordionTitle = (props: AccordionTitleProps) => {
    console.log('title');
    return (
        <h3>{props.title}</h3>
    )
}