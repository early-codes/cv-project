import React, { Component } from 'react';
import './component.css';

class GeneralInfo extends Component {

    constructor(props) {
        super(props);


        this.state = {
            birthDate: "1",
            eMail: "2",
            phone: "3",
            address: "4",
            fields: ""
        }

        this.fillFieldsHandler = this.fillFieldsHandler.bind(this);
        this.editHandler = this.editHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.editSubmitHandler = this.editSubmitHandler.bind(this);
        this.fieldNameSetter = this.fieldNameSetter.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    /* todo:
    p ye tıklayınca text inputta veriyi placeholder a değil value ya versin.
    */

    fieldNameSetter = (name) => {
        switch (name) {
            case "birthDate":
                return "Birth Date";
            case "eMail":
                return "E-Mail";
            case "phone":
                return "Phone Number";
            default:
                return "Address"
        }
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    editHandler = (field) => {
        let fieldsFiller = Object.keys(this.state);
        fieldsFiller = fieldsFiller.map((x) => {
            return ((x !== "fields") ?
                (field !== x) ?
                    <div key={x}><p key={x} name={x} onClick={() => this.editHandler(x)}>{this.state[x] || `Click Here To Set Your ${this.fieldNameSetter(x.toString)}`}</p></div> :
                    <form key={x} onSubmit={(event) => this.editSubmitHandler(event, x)}><input type="text" name={x} placeholder={this.state[x] || `Your ${this.fieldNameSetter(x.toString())} Here`}></input><input type="submit" value="Submit" /><br /></form> :
                null)
        })
        this.setState({
            fields: fieldsFiller
        })
    }

    editSubmitHandler = (event, x) => {
        event.preventDefault();
        this.setState({
            [x]: event.target.firstChild.value
        }, () => this.fillFieldsHandler("get"))
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.setState({
            phone: event.target.phone.value,
            eMail: event.target.eMail.value,
            birthDate: event.target.birthDate.value,
            address: event.target.address.value,
        }, () => this.fillFieldsHandler("get"));

    }

    fillFieldsHandler = (status, whichField) => {
        let fieldsFiller = Object.keys(this.state);
        if (status === "set") {
            fieldsFiller = fieldsFiller.map((x) => {
                return ((x !== "fields") ?
                    <div key={x}><input type="text" required name={x} placeholder={`${this.fieldNameSetter(x.toString())}`} onChange={(event) => this.handleChange(event)}></input><br /></div> :
                    null)
            })
            fieldsFiller = fieldsFiller.concat(<input key="submitKey" type="submit" value="Submit"></input>)
        } else {
            fieldsFiller = fieldsFiller.map((x) => {
                return ((x !== "fields") ? <h4 key={x} name={x} onClick={() => this.editHandler(x)}>{this.fieldNameSetter(x.toString())}: {this.state[x] || `Click Here To Set Your ${this.fieldNameSetter(x)}`}</h4> : null)
            })
        }

        this.setState({
            fields: <form onSubmit={this.submitHandler}>{fieldsFiller}</form>
        })
    }

    componentDidMount() {
        this.fillFieldsHandler("set", null)

    }

    render() {
        return (
            <div className="component">
                <h2 style={{ marginLeft: "-1%" }}>General Info:</h2>
                {this.state.fields}
            </div>
        )
    }

}

export default GeneralInfo;