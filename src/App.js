// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;


//////////////  We are going to start from scratch /////////////////////

import React, { Component } from 'react';



class Hello extends Component {
  // what should happen when the component is first created
  constructor (props){
    // make call to parent class' (Component) constructor
    super()
    //define an initial state below
    this.state = {
      clickCount: 1 // this initializes the this.state.clickCount to be 1
    }
  }
  increaseClick(e){
    if (this.state.clickCount < 10) {
      this.setState({
        clickCount: this.state.clickCount + 1
      })
    } else if (this.state.clickCount = 10){
      this.setState({
        clickCount: 1
      })
    }
  }

 // what should the component render?
 //below we are going to render some props from index.js in our JSX
  render(){
    return(
      <div>
        <h1>Hello {this.props.name}</h1>
        <h3>I am {this.props.age}.</h3>
        <p>I love to eat {this.props.food}!</p>
        <h2>This button makes a number increase.</h2>
        <p>The number is currently: {this.state.clickCount}</p>
        <button onClick={(e) => this.increaseClick(e)}>Click Me!</button>
      </div>
    )
  }
}


export default Hello;

//end
