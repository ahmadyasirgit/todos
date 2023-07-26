import React, {useState}  from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Counter()
{
    const [count, setCounter] = useState(0);

    function addCount()
{
    setCounter(count + 1);
}
function subCount()
{
    setCounter(count - 1);
}

    return (
    <div >
    < Header />
     <h1 className="counter">
     {count}
     </h1>
     <div className="class-center">

     <button className="button-56 " role="button" onClick={addCount}>+</button>
     <button className="button-56 " role="button" onClick={subCount}>-</button>

     </div> 

    < Footer />
     </div>
     );
}

export default Counter;