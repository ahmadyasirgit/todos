import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Login() {
  const [showText, setShowText] = useState(true);
  const [hoverBtn, setHoverBtn] = useState("👑");
  const [clickBtn, setClickBtn] = useState("click submit");
  // const [change, setChange] = useState("")
  // const [input1, setInput1] = useState("")
  // const [input2, setInput2] = useState("")

  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: ""
  })

  function changeText() {
    setHoverBtn("cheems");
    setShowText(true);
  }
  function changeText1() {
    setHoverBtn("King");
    setShowText(false);
  }

  // function changeInput(event) //onChange Event
  // {
  //   console.log(event.target.value)
  //   setInput1(event.target.value) 
  //   // setInput2(event.target.value) 
  //   setChange(event.target.value)
  // }
  // function changeInput1(event) //onChange Event
  // {
  //   console.log(event.target.value)
  //   // setInput1(event.target.value) 
  //   setInput2(event.target.value) 
  //   // setChange(event.target.value)
  // }

  function clicked(event) //onClick Event
  {
    console.log(event.target.value) //getting empty value
    setClickBtn(fullName.fname)

    event.preventDefault();
  }

  function eventHandler(event)
  {
      // const inputName= event.target.name;
      // const inputValue= event.target.value;
      //we can defactor this code in a simpler way 
      const {value, name}= event.target;

      // console.log(event)
      setFullName(e=>{
        console.log(e)
        // if(name === "fname")
        // {
        //   return{
        //     fname: value,
        //     lname: e.lname,
        //     email: e.email
        //   }
        // }
        // else if(name === "lname")
        // {
        //   return{
        //     lname: value,
        //     fname: e.lname,
        //     email: e.email
        //   }
        // }
        // else if (name === "email") 
        // {
        //   return{
            
        //     lname: e.lname,
        //     fname: e.lname,
        //     email: value
        //   }
        // }
        
        console.log([name])
        return{
          ...e, 
          [name]: value
        }

      })
  }


  return (
    <div>
      <Header />
      <div className="container">
        <h1>{hoverBtn}</h1>
        <h1>{fullName.fname + fullName.lname}</h1>
        <p>{fullName.email}</p>
        {/* <h1>{change}</h1> */}
        {/* <h1>{input1 + input2}</h1> */}
        <h1>{clickBtn}</h1>
        <form >
        <input onChange={eventHandler} name="fname" type="text" placeholder="What's your First name?" />
        <input onChange={eventHandler} name="lname"  type="text"  placeholder="What's your Second name?" />
        <input onChange={eventHandler} name="email"  type="text"  placeholder="Write email" />
        <button
         
          type="submit"
          style={{ backgroundColor: showText ? "blue" : "orange" }}
          onMouseOver={changeText}
          onMouseOut={changeText1}
          onClick={clicked}
        >
          Go
        </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
