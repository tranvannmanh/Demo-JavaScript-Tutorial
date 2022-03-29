import React from 'react';
import Dog from './Animal';

export default class Animal extends React.Component {
    constructor(props) {
        super(props);
        
        // define state object
        this.state = {
            type: 'dog',
            name: 'Joshep',
            color: 'red-yellow',
        }
    }

    // function to change color
    changeColor = () => {
        this.setState({
            // change state color to dark
            color: 'dark',
        })
    }

    render() {
        return (
            <div>
                {/**
                 * send props to Dog component as syntax of attribute in HTML
                 */}
                <Dog
                    type={this.state.type}
                    name={this.state.name}
                    color={this.state.color}
                />
                {/**
                 * use state color
                 */}
                <p>Color: {this.state.color}</p>
                <button
                    onClick={this.changeColor}
                    style={{
                        backgroundColor: 'blue',
                        color: 'white',
                    }}
                >
                    Change color
                </button>
            </div>
        )
    }
}