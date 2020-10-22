import React, { Component } from 'react';
import './component.css';

class GeneralInfo extends Component {

    constructor(props) {
        super(props);


        this.state = {
            phone: "",
            eMail: "",
            birthDate: "",
            address: "",
        }

        this.phoneSubmitHandler = this.phoneSubmitHandler.bind(this);
    }

    phoneSubmitHandler = (event) => {
        event.preventDefault();
        this.setState({
            phone: event.target.phone.value,
            eMail: event.target.eMail.value,
            birthDate: event.target.birthDate.value,
            address: event.target.address.value,
        })
    }

    render() {
        return (
            <div className="component">
                <h2>General Info</h2>
                <form onSubmit={this.phoneSubmitHandler}>
                    <input type="text" name="phone" placeholder="Your Phone Here"></input>
                    <p>Phone: {this.state.phone || "sfds"}</p>
                    <input type="text" name="eMail" placeholder="Your E-Mail Here"></input>
                    <p>{this.state.eMail || "sfds"}</p>
                    <input type="text" name="birthDate" placeholder="Your Date of Birth Here"></input>
                    <p>{this.state.birthDate || "sfds"}</p>
                    <input type="text" name="address" placeholder="Your address Here"></input>
                    <p>{this.state.address || "sfds"}</p>

                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }

}

export default GeneralInfo;