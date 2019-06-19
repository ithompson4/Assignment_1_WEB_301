import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Select from './components/Select/Select';
import Textarea from './components/Textarea/Textarea';

const clickBut = () => {
  alert('This is a clickable button');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Web301 Assignment 1 - Creating Components
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        
        <div className="el">
          <Card cardStyle="cardShadow" cardTitle="Choose Action: ">
            <div>
              <Button buttonStyle="primary" handleClick={clickBut}>Accept</Button>
              <Button buttonStyle="danger" handleClick={clickBut}>Decline</Button>
            </div>
          </Card>
        </div>
        <div className="el">
          <Input styleInput="inputBorderBottom" inputLabel="Enter Your Name: " />
        </div>
        <div className="el">
          <Button buttonStyle="primary" handleClick={clickBut}>Click here</Button>
        </div>
        <div className="el">
          <Select selectStyle="selectCust" />
        </div>
        <div className="el">
          <Textarea textareaStyle="textareaDotted" message="Leave Comment" areaTitle="Comment..."/>
        </div>
      </header>
    </div>
  );
}

export default App;
