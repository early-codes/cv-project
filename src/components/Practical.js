import React, { Component } from 'react';
import './component.css';

class Practical extends Component {

    constructor(props) {
        super(props);

        this.state = {
            expField: []
        }

        this.addExpHandler = this.addExpHandler.bind(this);
        this.expSubmitHandler = this.expSubmitHandler.bind(this);
        this.cancelHandler = this.cancelHandler.bind(this);
        this.editExpHandler = this.editExpHandler.bind(this);
        this.removeExpHandler = this.removeExpHandler.bind(this);
    }

    addExpHandler = () => {
        let index = this.state.expField.length - 1;
        this.setState({
            expField: [...this.state.expField.slice(0, index),
            <form key={index} onSubmit={(event) => this.expSubmitHandler(event, index)}>
                <input required type="text" name={index + "inputText"} placeholder="Your Work Experience Here"></input><br />
                <textarea required placeholder="Your Work Experience Details Here" name={index + "textArea"}></textarea><br />
                <input type="submit" value="Submit"></input>
                <input type="button" value="Cancel" onClick={() => this.cancelHandler(index)}></input>
            </form>,
            ...this.state.expField.slice(index)]
        })
    }

    expSubmitHandler = (event, expIndex) => {
        event.preventDefault();
        let expFieldSetter = this.state.expField.map((field, index) => {
            return ((index === expIndex) ?
                <div className="entries" key={index} onClick={() => this.editExpHandler(index)}>
                    <h3>{event.target.children[0].value}</h3>
                    <p>{event.target[1].value}</p>
                </div> :
                field
            )
        })
        this.setState({
            expField: expFieldSetter
        })
    }

    editExpHandler = (expIndex) => {
        let fieldToChange = this.state.expField.filter((field) => (field.key) === expIndex.toString())
        this.setState({
            expField: this.state.expField.map((field) => {
                return ((expIndex.toString() === field.key.toString()) ?
                    <form key={expIndex} onSubmit={(event) => this.expSubmitHandler(event, expIndex)}>
                        <input required type="text" name={expIndex + "inputText"} placeholder="Your Work Experience Here"></input><br />
                        <textarea required placeholder="Your Work Experience Details Here" name={expIndex + "textArea"}></textarea><br />
                        <input type="submit" value="Submit"></input>
                        <input type="button" value="Cancel" onClick={() => this.cancelHandler(expIndex, fieldToChange)}></input>
                        <input type="button" value="Remove" onClick={() => this.removeExpHandler(expIndex)}></input>
                    </form> :
                    field
                )
            })
        })
    }

    cancelHandler = (filterIndex, fieldToChange) => {
        this.setState({
            expField: this.state.expField.map((field) => {
                return ((field.key === filterIndex.toString()) ?
                    fieldToChange[0] :
                    field
                )
            })
        })
    }

    removeExpHandler = (filterIndex) => {
        this.setState({
            expField: this.state.expField.filter((field) => field.key !== filterIndex.toString())
        })
    }



    componentDidMount() {
        this.setState({
            expField: this.state.expField.concat(<input key={"10000"} type="submit" value="+" onClick={this.addExpHandler} style={{ margin: "30px", height: "50px", width: "50px", fontSize: "40px", lineHeight: "20px", padding: "0px", borderRadius: "50%", border: "0", backgroundColor: "#28abb9", color: "white" }}></input>)
        })
    }

    render() {
        return (
            <div className="component">
                <h2 style={{ marginLeft: "-1%" }}>Practical:</h2>
                {this.state.expField}
            </div>
        )
    }
}

export default Practical