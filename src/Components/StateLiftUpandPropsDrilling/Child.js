import React from "react";

const Child = ({count, increment}) => {
    return(
        <div>
            <p>Count: {count}</p>
            <button type="button" onClick={increment}>Increment</button>
        </div>
    )
}

export default Child;