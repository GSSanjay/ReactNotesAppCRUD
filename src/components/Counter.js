import React, { useState } from "react";
import Header from "./Header";
const Counter = () => {
    const [count, setCount] = useState(0);
    const incr = () => {
        setCount(count + 1);
    }
    const decr = () => {
        setCount(count - 1);
    }
    return (
        <>
            <div className="container">
                {/* <h1>Counter</h1> */}
                <Header title="Counter"></Header>
                <h2>{count}</h2>
                <button onClick={incr}>Count++</button>
                <button onClick={decr}>Count--</button>
            </div>
        </>
    )

}

export default Counter;