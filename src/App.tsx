import React from 'react';
import './App.css';
import {Rating} from "./Rating";
import {Accordion} from "./components/Accordion";

function App() {
    // const sum = (a, b) => {
    //     return a + b;
    // }
  return (
    <div className="App">
      <div>
          <input type="text"/>
          <input/>
        This is app
          <Rating value={3}/>
          <Accordion collapsed={true} title={'Title 1'}/>
          <Accordion collapsed={false} title={'Title 2'}/>
          <Rating value={4}/>
      </div>
    </div>
  );
}






export default App;

