import React from 'react';
import './App.css';
import {Rating} from "./Rating";
import {Accordion} from "./components/Accordion";
import {OnOff} from './components/onOff/OnOff';


function App() {

    return (
        <div className="App">
            <div>
                <input type="text"/>
                <input/>
                This is app
                <Rating value={3}/>
                <Accordion collapsed={true} title={'Title 1'}/>
                <Accordion collapsed={true} title={'Title 2'}/>
                <Rating value={4}/>
                <Rating value={0}/>
                <Rating value={5}/>
            </div>
            <div>
                <OnOff value={true}/>
            </div>
        </div>
    );
}






export default App;

