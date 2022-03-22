/**
 * jsx = javascript + xml
 * nhắc lại xml: là ngôn ngữ đánh dấu, cho phép tạo ra các ngôn ngữ đánh dấu khác nhau để mô tả dữ liệu khác nhau
 * 
 * JSX stands for JavaScript XML.
 * JSX allows us to write HTML in React.
 * JSX makes it easier to write and add HTML in React.
 * 
 * vd về jsx:
 */
const myelement = <h1>I Love JSX!</h1>;

/**
 * JSX expression
 * write expression in { }
 * VD:
 */
const myelement1 = <h1>React is {5 + 5} times better with JSX</h1>;

/**
 * Inserting a Large Block of HTML
 * To write HTML on multiple lines, put the HTML inside parentheses:
 */
const myelement2 = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

/**
 * One Top Level Element
 * The HTML code must be wrapped in ONE top level element
 * if you like to write two paragraphs, you must put them inside a parent element, like a div element.
 */
const myelement3 = (
  <div>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </div>
);

/**
 * Elements Must be Closed
 */
const myelement4 = <input type="text" />;

/**
 * camelCase rule
 * For example, 'class' becomes 'className' in JSX, and 'tabindex' becomes 'tabIndex'.
 */
const myelement5 = <h1 className='header'>Hello World</h1>

/**
 * Specifying Attributes with JSX
 *  You may use quotes to specify string literals as attributes:
 * and use a close tag if JSX tags contain children
 */
const element = <img src={user.avatarUrl} />

/**
 * JSX Represents Objects
 *
 */
const element1 = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
//OR
const elemen2 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);