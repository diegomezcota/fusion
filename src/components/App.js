import React, {useState} from "react"

// Convert the class below to a functional component that uses the useState hook to initalize a count vartiable to 0 and display the count on the screen.
// Don't worry about the part where the button changes the count quite yet, that's what you're here to learn about!

function App(){
    const [count, setCount] = useState(0)

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    function double(){
        setCount(prevCount => prevCount * 2)
    }

    function halve(){
        setCount(prevCount => Math.floor(prevCount / 2))
    }

    return ( 
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment!</button>
            <br/>
            <button onClick={decrement}>Decrement!</button>
            <br/>
            <button onClick={double}>Double!</button>
            <br/>
            <button onClick={halve}>Halve!</button>
        </div>
    )
}

export default App
