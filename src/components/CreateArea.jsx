import React from "react";
import { useState } from "react";

function CreateArea(props) {
    const [inputNote, setInputNote] = useState(
        {
            title: "", 
            content: ""
        }
    );
  function clickHandle(event) {
    props.onAdd(inputNote);
    event.preventDefault();


  }
  function handleChange(event) {
    const {name, value} = event.target;
    setInputNote(e=>{
        return {
            ...e,
            [name]: value
        };
    })
  }

  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} value={inputNote.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={inputNote.content} placeholder="Take a note..." rows="3" />
        <button onClick={clickHandle}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
