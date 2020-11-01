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

  };


  render() {


    return (
      < div className="App" >
        <Title />
        <GeneralInfo />
        <Education />
        <Practical />
      </div>
    );
  }
}

export default App;
