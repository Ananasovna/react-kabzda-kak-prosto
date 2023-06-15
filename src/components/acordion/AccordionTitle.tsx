import React from "react";

type AccordionTitlePropsType = {
    title: string;
    callBack: () => void;
}
export const AccordionTitle = (props: AccordionTitlePropsType) => {

    return (
        <h3 onClick={props.callBack}>{props.title}</h3>
    )
}