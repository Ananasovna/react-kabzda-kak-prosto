import React, {useState} from 'react';
import './App.css';
import {UncontrolledAccordion} from "./components/acordion/UncontrolledAcordion";
import {UncontrolledRating, ValueType} from "./components/rating/UncontrolledRating";
import {Rating} from "./components/rating/Rating";
import {Accordion} from "./components/acordion/Accordion";
import {OnOff} from "./components/onOff/OnOff";
import {ControlledOnOff} from "./components/onOff/ControlledOnOff";


function App() {

    const [value, setValue] = useState<ValueType>(0);
    const [collapsed, setCollapsed] = useState(true);
    const [on, setOn] = useState(false);

    const setStars = (id: ValueType) => {
        id === value ? setValue(0) : setValue(id);
    }

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    }

    const toggleOn = () => {
        setOn(!on);
    }

    return (
        <div className="App">
            {/*<UncontrolledAccordion title={'Menu'} />*/}
            {/*<UncontrolledAccordion title={'To do'} />*/}
            <UncontrolledRating />
            <UncontrolledRating />
            <UncontrolledRating />
            {/*<div>*/}
            {/*    <input type="text"/>*/}
            {/*    <input/>*/}
            {/*    This is app*/}
            {/*    <Rating value={3}/>*/}
                <Accordion collapsed={collapsed} callBack={toggleCollapsed} title={'Title 1'}/>
                <Accordion collapsed={collapsed} callBack={toggleCollapsed} title={'Title 2'}/>
                <Rating value={value} setStars={(id: ValueType) => setStars(id)}/>
                <Rating value={value} setStars={(id: ValueType) => setStars(id)}/>
                <Rating value={value} setStars={(id: ValueType) => setStars(id)}/>
            {/*</div>*/}
            {/*<div>*/}
                <OnOff onChange={setOn}/>{on.toString()}
                <OnOff onChange={setOn}/>
                <OnOff onChange={setOn}/>
            {/*<ControlledOnOff status={on} callBack={toggleOn}/>*/}
            {/*<ControlledOnOff status={on} callBack={toggleOn}/>*/}
            {/*<ControlledOnOff status={on} callBack={toggleOn}/>*/}
            {/*</div>*/}
        </div>
    );
}






export default App;

