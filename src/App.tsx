import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let a = 10;
  return (
    <div className="App">
      <div>
        This is app
          <Rating />
          <Accordion />
      </div>
    </div>
  );
}

function Rating()
{
    return (
        <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>

    )
}

function Star() {
    return (
        <div>star</div>
    )
}



function Accordion() {
    console.log('Accordion');
    return <div>
        <AccordionTitle />
       <AccordionBody />
    </div>
}

function AccordionTitle () {
    console.log('title');
    return (
        <h3>Меню</h3>
    )
}
function AccordionBody () {
    console.log('body');
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default App;

