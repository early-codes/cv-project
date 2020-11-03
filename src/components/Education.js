import React, { Component } from 'react';
import './component.css';

class Education extends Component {

    constructor(props) {
        super(props)

        this.state = {
            eduField: []
        }

        this.addEduHandler = this.addEduHandler.bind(this);
        this.eduSubmitHandler = this.eduSubmitHandler.bind(this);
        this.cancelHandler = this.cancelHandler.bind(this);
        this.editEduHandler = this.editEduHandler.bind(this);
        this.removeEduHandler = this.removeEduHandler.bind(this);
    }

    componentDidMount() {
        this.setState({
            eduField: this.state.eduField.concat(<input key={"10000"} type="submit" value="+" onClick={this.addEduHandler} style={{
                marginTop: "1%",
                marginLeft: "30%",
                height: "50px",
                width: "50px",
                fontSize: "40px",
                lineHeight: "20px",
                padding: "0px",
                borderRadius: "50%",
                border: "0",
                backgroundColor: "#28abb9",
                color: "white",
                $nest: {
                    "&:hover": {
                        color: "black"
                    }
                }
            }}></input>)
        })
    }

    addEduHandler = () => {
        let index = this.state.eduField.length - 1;
        this.setState({
            eduField: [...this.state.eduField.slice(0, index),
            <form key={index} onSubmit={(event) => this.eduSubmitHandler(event, index)}>
                <input required type="text" name={index + "inputText"} placeholder="Your Education Here"></input><br />
                <textarea placeholder="Your Education Details Here" required name={index + "textArea"}></textarea><br />
                <input type="submit" value="Submit"></input>
                <input type="button" value="Cancel" onClick={() => this.cancelHandler(index, null)}></input>
            </form>,
            ...this.state.eduField.slice(index)]
        }, () => { console.log(this.state.eduField[index]) })
    }

    eduSubmitHandler = (event, eduIndex) => {
        event.preventDefault()
        let eduFieldSetter = this.state.eduField.map((field, index) => {
            return ((index === eduIndex) ?
                <div className="entries" onClick={() => this.editEduHandler(index)} key={index}>
                    <h3>{event.target.children[0].value}</h3>
                    <p>{event.target[1].value}</p>
                </div> :
                field
            )
        })
        this.setState({
            eduField: eduFieldSetter
        })
    }

    editEduHandler = (eduIndex) => {
        let fieldToChange = this.state.eduField[eduIndex]
        this.setState({
            eduField: this.state.eduField.map((field) => {
                return ((eduIndex.toString() === (field.key)) ?
                    <form key={eduIndex} onSubmit={(event) => this.eduSubmitHandler(event, eduIndex)}>
                        <input required type="text" name={eduIndex + "inputText"} placeholder="Your Education Here"></input><br />
                        <textarea required placeholder="Your Education Detils Here" name={eduIndex + "textArea"}></textarea><br />
                        <input type="submit" value="Submit"></input>
                        <input type="button" value="Cancel" onClick={() => this.cancelHandler(eduIndex, fieldToChange)}></input>
                        <input type="button" value="Remove" onClick={() => this.removeEduHandler(eduIndex)}></input>
                    </form> :
                    field
                )
            })
        })
    }

    cancelHandler = (filterIndex, fieldToChange) => {
        let eduFieldSetter = () => {
            if (fieldToChange) {
                return (
                    this.state.eduField.map((field) => {
                        return (
                            (field.key.toString() === filterIndex.toString()) ?
                                fieldToChange :
                                field
                        )
                    })
                )
            } else {
                return (
                    this.state.eduField.filter((field) =>
                        field.key !== filterIndex.toString()
                    )
                )
            }
        }
        this.setState({
            eduField: eduFieldSetter()
        })
    }

    removeEduHandler = (filterIndex) => {
        this.setState({
            eduField: this.state.eduField.filter((field) => field.key !== filterIndex.toString())
        })
    }

    render() {



        return (
            <div className="component">
                <h2>Education:</h2>
                <div className="fieldStyle">
                    {this.state.eduField}
                </div>
            </div>
        )
    }
}

export default Education;