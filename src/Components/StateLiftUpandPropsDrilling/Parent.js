import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    return(
        <div>
            <Child count={count} increment={increment}/>
        </div>
    )
}

export default Parent;