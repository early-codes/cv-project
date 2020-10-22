import React, { Component } from 'react';
import './component.css';

class Practical extends Component {

    constructor(props) {
        super(props);

        this.state = {
            workExperience: []
        }
    }

    render() {
        return (
            <div className="component">
                <h2>Practical</h2>
            </div>
        )
    }
}

export default Practical