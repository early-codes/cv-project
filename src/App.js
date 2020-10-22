import React, { Component } from 'react';
import './App.css';

import Education from './components/Education';
import GeneralInfo from './components/GeneralInfo';
import Practical from './components/Practical';
import Title from './components/Title';

class App extends Component {

  constructor(props) {
    super(props);


    this.state = {
      name: '',
      nameField: <form onSubmit={this.nameSubmitHandler}>
        <input type="text" name="name" placeholder="Your Name Here" />
        <input type="submit" value="Submit"></input>
      </form>
    }

    this.nameSubmitHandler = this.nameSubmitHandler.bind(this);
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
  };

  nameSubmitHandler = (event) => {
    this.setState({
      name: event.target.name.value,
      nameField: <p onClick={() => this.nameFieldSetter(this.state.name)}>{event.target.name.value || "Click here to set your name"}</p>
    })

  }

  nameChangeHandler = (event) => {
    event.preventDefault();
    this.setState({
      name: event.target.value
    })
  }

  nameFieldSetter = (name) => {
    this.setState({
      nameField: <form onSubmit={this.nameSubmitHandler}>
        <input type="text" name="name" onChange={this.nameChangeHandler} placeholder="Your Name Here" />
        <input type="submit" value="Submit"></input>
      </form>
    })
  }


  render() {


    return (
      < div className="App" >
        <Title />
        <GeneralInfo />
        <Practical />
        <Education />
      </div>
    );
  }
}

export default App;
