import React from "react";
import Cards from "./Cards";
import notes from "./notes";

function Note()
{
    return (
       <div>
           {notes.map( (noteItem) =>
           <Cards key = {noteItem.key} 
            title={noteItem.title} 
            description = {noteItem.description}        
            />
)}
       </div>
        
    );
}

export default Note;