import React, { Component } from 'react';
import './component.css';

class Education extends Component {

    constructor(props) {
        super(props)

        this.state = {
            schools: ["asdf"],

            eduField: [<div key={"0"} style={{ height: "100px", width: "100px", backgroundColor: "blue" }}></div>]
        }

        this.addEduHandler = this.addEduHandler.bind(this)
    }

    componentDidMount() {
        this.setState({
            eduField: [<div key={"0"} style={{ height: "100px", width: "100px", backgroundColor: "red" }}></div>]
        })
    }

    addEduHandler = () => {
        let index = this.state.eduField.length;
        this.setState({
            eduField: this.state.eduField.concat(<div key={`&{index}`} style={{ height: "100px", width: `${100 + (index * 10)}px`, backgroundColor: "blue" }} ></div >)
        })
    }

    render() {



        return (
            <div className="component">
                <h2>Education</h2>
                <button onClick={this.addEduHandler}></button>
                <p>{this.state.schools[0]}</p>
                {this.state.eduField}
            </div>
        )
    }
}

export default Education;