/**
 * React Props
 * 
 * 'props' stands for properties
 * Props are arguments passed into React components.
 * Props are passed to components via HTML attributes.
 * 
 * Props are like funtion arguments in JS and attributes in HTML.
 * Send props into component, use the same syntax as HTML attributes
 * VD:
 */

function Car(props) {
    // Car component has an attribute named 'color'
    return <h2>Rain bow is {props.color}</h2>
}

const myelement = <Car color='color full'/> // use { } if prop 'color' not a string
/**
 * Props are immutable (read only)
 */


/**
 * React State
 * 
 * Can use in Class component.
 * State is an object where we store properties of component.
 * When the state change, the component re-render.
 * State object can contain many properties.
 * Use state object(syntax): this.state.propertyName in curly brace '{}'
 * VD:
 */
/**
 * Changing the 'state' Object
 * Use the method: this.setState()
 * when the value in the state object change, component will re-render
 */
class Animal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'cat',
            name: 'Lucifer',
            says: 'meow meow',
            color: 'yellow',
        };
    }

    changeColor = () => {
        this.setState({
            color: "blue",
        })
    }

    render() {
        return (
            <div>
                <h1>My {this.state.type}</h1>
                <p>It's name is {this.state.name}, and it says {this.state.says}</p>
                <button onClick={this.changeColor}>Change color</button>
            </div>
        );
    }
}

/**
 * Compare
 * 
 * props:
 *  +immutable (read-only)
 *  +make component reusable
 *  +can use props to stateless component
 *  +can be passed from outside
 * 
 * state:
 *  +mutable
 *  +can not make component reusable
 *  +can not use state to stateless component
 *  +controlled by component itself.
 *  +rendering dynamic change with the component.
 */