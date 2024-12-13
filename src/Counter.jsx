import { useState } from "react";

export const Counter = () =>{
const [counter, setCounter] = useState(0)
const onClick = () => {
    setCounter((estado) =>estado+1)
}
return (
    <div>
        <button onClick={onClick}>+</button>
        <p>{counter}</p>
    </div>
)
}