export default function Dog(props) {
    /**
     * @type type of animal
     * @name name of animal
     * @color animal's color
     */
    return (
        <div>
            {/**
             * use props in curly brace {}
             */}
            <h1>My {props.type}</h1>
            <p>It's named {props.name} and it's has color {props.color}</p>
        </div>
    )
}