import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Body from './components/Body';
import Buttons from './components/Buttons';

const App = () => {
  return (
    <div>
      <NavBar />
      <Body text="Computer And Laptop

Accessories

There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or" image="/Computador-PNG.png" />
      <Buttons />
    </div>
  );
};

export default App;