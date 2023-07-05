import React from "react";
import {ItemType} from "./Accordion";


type AccordionBody = {
    items: ItemType[]
    onClick: (value: any) => void
}

export const AccordionBody = ({items, onClick}: AccordionBody) => {
    return (
        <ul>
            {items.map((el, index) => <li onClick={() => onClick(el.value)} key={index}>{el.title}</li>)}
        </ul>
    )
}