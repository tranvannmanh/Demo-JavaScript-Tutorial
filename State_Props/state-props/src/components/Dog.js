import React from 'react';
import Dog from './Animal';

export default class Animal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'dog',
            name: 'Joshep',
            color: 'red-yellow',
        }
    }

    changeColor = () => {
        this.setState({
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