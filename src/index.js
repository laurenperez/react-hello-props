import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './App';
import registerServiceWorker from './registerServiceWorker';

var person = {
  personName: "Lauren",
  personAge: 32,
  foods: [
    "Pizza ",
    "Burgers ",
    "Sushi "
  ]
};


ReactDOM.render(<Hello
                name = {person.personName}
                age = {person.personAge}
                food = {person.foods}
                />, document.getElementById('root'));
registerServiceWorker();
