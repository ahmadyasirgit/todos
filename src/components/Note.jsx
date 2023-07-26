import React, { useState } from "react";
import Cards from "./Cards";
// import notes from "./notes";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Footer from "./Footer";

function Note() {
  const [toDo, setTodo] = useState([]);
  function addNotes(newToDo) {
    // console.log(inpNote)
    setTodo((e) => {
      return [...e, newToDo];
    });
  }

  function deleteToDo(id)
  {
    console.log("delete invoked.", id)
    setTodo((prevToDo) => {
        return prevToDo.filter((item, i) => i !== id);
      });

    console.log(toDo)


  }


  return (
    <div>
      {/* {notes.map( (noteItem) =>
           <Cards key = {noteItem.key} 
            title={noteItem.title} 
            description = {noteItem.description}        
            />
)} */}

      <Header />
      <CreateArea onAdd={addNotes} />
      {/* <Cards key={1} title="Note title" content="Note content" /> */}
      {toDo.map((addTodo, index) => {
        return <Cards key ={index} id = {index} title={addTodo.title} content={addTodo.content} onDelete={deleteToDo} />;
      })}

      <Footer />
    </div>
  );
}

export default Note;
