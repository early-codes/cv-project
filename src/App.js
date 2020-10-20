import React, { Component } from 'react';
import './App.css';

import Education from './components/Education';
import GeneralInfo from './components/GeneralInfo';
import Practical from './components/Practical';

class App extends Component {

  constructor(props) {
    super(props);


    this.state = {
      name: ''
    }

    this.nameSubmitHandler = this.nameSubmitHandler.bind(this);
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
  };

  nameSubmitHandler = (event) => {
    this.setState({
      name: event.target.name.value
    })
  }

  nameChangeHandler = (nameField) => {
    console.log(nameField);
    nameField = <form onSubmit={this.nameSubmitHandler}>
      <input type="text" name="name" placeholder={this.state.name} />
      <input type="submit" value="Submit"></input>
    </form>
    return nameField;
  }



  render() {

    let nameField = <div></div>

    this.state.name ?
      nameField = <p onClick={() => this.nameChangeHandler(nameField)}>{this.state.name}</p> :
      nameField = <form onSubmit={this.nameSubmitHandler}>
        <input type="text" name="name" placeholder="Your Name Here" />
        <input type="submit" value="Submit"></input>
      </form>



    return (
      < div className="App" >
        <h1>CIRRICULUM VITAE</h1>
        {nameField}
        <GeneralInfo />
        <Practical />
        <Education />
      </div>
    );
  }
}

export default App;
