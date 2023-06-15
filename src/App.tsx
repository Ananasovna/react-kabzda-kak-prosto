import React, {useState} from 'react';
import './App.css';
import {UncontrolledAccordion} from "./components/acordion/UncontrolledAcordion";
import {UncontrolledRating, ValueType} from "./components/rating/UncontrolledRating";
import {Rating} from "./components/rating/Rating";


function App() {

    const [value, setValue] = useState<ValueType>(0);

    const setStars = (id: ValueType) => {
        id === value ? setValue(0) : setValue(id);
    }

    return (
        <div className="App">
            <UncontrolledAccordion title={'Menu'} />
            <UncontrolledAccordion title={'To do'} />
            <UncontrolledRating />
            <UncontrolledRating />
            <UncontrolledRating />
            {/*<div>*/}
            {/*    <input type="text"/>*/}
            {/*    <input/>*/}
            {/*    This is app*/}
            {/*    <Rating value={3}/>*/}
            {/*    <Accordion collapsed={true} title={'Title 1'}/>*/}
            {/*    <Accordion collapsed={true} title={'Title 2'}/>*/}
                <Rating value={value} setStars={(id: ValueType) => setStars(id)}/>
                <Rating value={value} setStars={(id: ValueType) => setStars(id)}/>
                <Rating value={value} setStars={(id: ValueType) => setStars(id)}/>
            {/*</div>*/}
            {/*<div>*/}
            {/*    <OnOff/>*/}
            {/*    <OnOff/>*/}
            {/*    <OnOff/>*/}
            {/*</div>*/}
        </div>
    );
}






export default App;

