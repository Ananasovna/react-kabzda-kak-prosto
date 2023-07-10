import React, {useEffect, useState} from 'react';
import './App.css';
import {UncontrolledRating, ValueType} from "./components/rating/UncontrolledRating";
import {Rating} from "./components/rating/Rating";
import {OnOff} from "./components/onOff/OnOff";
import {Select} from "./components/select/Select";
import {UncontrolledAccordion} from "./components/acordion/UncontrolledAcordion";
import {ItemType} from "./components/acordion/Accordion";


function App() {

    const [value, setValue] = useState<ValueType>(0);
    const [collapsed, setCollapsed] = useState(true);
    const [on, setOn] = useState(false);
    const [selectValue, setSelectValue] = useState(undefined)

    const setStars = (id: ValueType) => {
        id === value ? setValue(0) : setValue(id);
    }

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    }

    const toggleOn = () => {
        setOn(!on);
    }

    const users:  ItemType[] = [
        {title: 'Dimych', value: 1},
        {title: 'Anna', value: 2},
        {title: 'Elena', value: 3},
        {title: 'Nikolay', value: 4},
    ]

    return (
        <div className="App">
            <UncontrolledAccordion title={'Menu'} items={users}/>
            <UncontrolledAccordion title={'To do'} items={users}/>
            {/*<UncontrolledRating />*/}
            {/*<UncontrolledRating />*/}
            {/*<UncontrolledRating />*/}
            {/*<div>*/}
            {/*    <input type="text"/>*/}
            {/*    <input/>*/}
            {/*    This is app*/}
            {/*    <Rating value={3}/>*/}
            {/*    <Accordion items={users} collapsed={collapsed} callBack={toggleCollapsed} title={'Title 1'}/>*/}
            {/*    <Accordion items={users} collapsed={collapsed} callBack={toggleCollapsed} title={'Title 2'}/>*/}
            {/*    <Rating value={value} setStars={(id: ValueType) => setStars(id)}/>*/}
            {/*    <Rating value={value} setStars={(id: ValueType) => setStars(id)}/>*/}
            {/*    <Rating value={value} setStars={(id: ValueType) => setStars(id)}/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <OnOff onChange={setOn}/>{on.toString()}*/}
            {/*    <OnOff onChange={setOn}/>*/}
            {/*    <OnOff onChange={setOn}/>*/}
            {/*<ControlledOnOff status={on} callBack={toggleOn}/>*/}
            {/*<ControlledOnOff status={on} callBack={toggleOn}/>*/}
            {/*<ControlledOnOff status={on} callBack={toggleOn}/>*/}
            {/*</div>*/}
            <Select value={selectValue} items={users} onClick={setSelectValue} />
        </div>
    );
}






export default App;

