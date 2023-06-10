import React from 'react';
import './App.css';
import {UncontrolledAccordion} from "./components/acordion/UncontrolledAcordion";
import {UncontrolledRating} from "./components/rating/UncontrolledRating";


function App() {

    return (
        <div className="App">
            <UncontrolledAccordion title={'Menu'} />
            <UncontrolledAccordion title={'To do'} />
            <UncontrolledRating />
            {/*<div>*/}
            {/*    <input type="text"/>*/}
            {/*    <input/>*/}
            {/*    This is app*/}
            {/*    <Rating value={3}/>*/}
            {/*    <Accordion collapsed={true} title={'Title 1'}/>*/}
            {/*    <Accordion collapsed={true} title={'Title 2'}/>*/}
            {/*    <Rating value={4}/>*/}
            {/*    <Rating value={0}/>*/}
            {/*    <Rating value={5}/>*/}
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

