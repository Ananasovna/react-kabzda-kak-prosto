import {useState} from "react";
import {action} from '@storybook/addon-actions'
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion stories',
    component: Accordion
}

const users = [
    {title: 'Dimych', value: 1},
    {title: 'Anna', value: 2},
    {title: 'Elena', value: 3},
    {title: 'Nikolay', value: 4},
]

const callback = action('collapsed or uncollapsed mode switched');
const onclick = action('some element was clicked');

export const CollapsedMode = () => <Accordion onClick={(value: any) => console.log(value)} items={users} title={'Menu'} collapsed={true} callBack={callback}/>
export const UncollapsedMode = () => <Accordion onClick={(value: any) => console.log(value)} items={users} title={'Menu'} collapsed={false} callBack={callback}/>

export const AccordionChangingMode = () => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <Accordion onClick={(value: any) => console.log(value)} items={users} title={'Menu'} collapsed={collapsed} callBack={() => setCollapsed(!collapsed)}/>
    )
}