import React, { Component } from 'react';
import './component.css'


class Title extends Component {


    constructor(props) {
        super(props);

        this.state = {
            name: '',
            fields: {
                name: ""
            }
        }

        this.toggleFieldHandler = this.toggleFieldHandler.bind(this);
        this.submitNameHandler = this.submitNameHandler.bind(this);
    }

    submitNameHandler = (event) => {
        this.setState({
            name: event.target.name.value
        })
        this.toggleFieldHandler("read", event.target.name.value)
    }

    toggleFieldHandler = (status, name) => {
        let fieldToggler = "";
        if (status === "set") {
            fieldToggler =
                <form onSubmit={this.submitNameHandler}>
                    <input required type="text" name="name" placeholder={this.state.name || "Your Name Here"} /><input type="submit" value="Submit" />
                </form>
        } else {
            fieldToggler = <h3 onClick={() => this.toggleFieldHandler("set", this.state.name)}>{name || "Click Here To Set Your Name"}</h3>
        }
        this.setState({
            fields: {
                name: fieldToggler
            }
        })

    }


    componentDidMount() {
        this.toggleFieldHandler("set", this.state.name)
    }

    render() {

        return (
            <div className="component" style={{ textAlign: "center" }}>
                <h1>CIRRICULUM VITAE</h1>
                {this.state.fields.name}
            </div>

        )
    }
}

export default Title