import '../App.css';
import React from 'React';

/**
 * Components
 * 
 * it looks like functions that return HTML elements
 * components are independent and reuseable.
 * Components come in two types, Class components and Function components
 * the component's name MUST start with an upper case letter.
 */

/**
 * Class Component
 * A class component must include the extends React.Component statement.
 * The component also requires a render() method, this method returns HTML.
 */
class ClassComponent extends React.Component {
	render() {
		return <h1>Demo class component</h1>
	}
}

/**
 * constructor()
 * 
 * we can have a constructor() method in class component
 * if there is a constructor() it'll be called
 * initiate component's properties(props)
 */
class ConstructorDemo extends React.Component {
	constructor() {
		super();
		this.state = {
			content: 'Demo constructor',
		}
	};
	render() {
		return <h1>Demo constructor: {this.state.content}</h1>
	}
}

/**
 * PROPS
 * 
 * handling component properties is by using props.
 * Props are like function arguments, send them into the component as attributes.
 * If your component has a constructor function, the props should always be passed to the constructor and also to the React.Component via the super() method.
 */
class PropsDemo extends React.Component{
	render() {
		return <h1>{this.props.content}</h1>
		/**
		 * now we have an attribute named 'content' in this component
		 * define this attribute when this component is called
		 * VD: <PropsDemo content='content'/>
		 */
	}
}

/**
 * Function Component
 * we don't need to extend React.Component
 * we don'nt need to render() method in a function component
 */

function FunctionComponent() {
	return <h1>Demo funtion component</h1>
}


/**
 * Props in function component
 * like function arguments in JavaScript and attributes in HTML
 * To send props into a component, use the same syntax as HTML attributes: 
 * */


function DemoComponent(props){
	return (
		<div className="App">
	      <header className="App-header">
	        <h1>
		      {props.content}!!!
		    </h1>
    	    <p>T R A N V A N M A N H</p>
		</header>
    </div>
	)
}

export default DemoComponent;