/**
 * Components
 * it looks like functions that return HTML elements
 * components are independent and reuseable.
 * Components come in two types, Class components and Function components
 */
// Class component
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

// Function component
function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

/**
 * Component Constructor
 * constructor() is a function that will be called when the components gets initiated
 * where you initiate the component's properties.
 */
class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a Car!</h2>;
  }
}


/**
 * Props
 * Components can be passed as props(properties)
 */