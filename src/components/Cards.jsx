import React from "react";

function Cards(props) {
    function handleDelete(){
        props.onDelete(props.id);
    }

  return (
    // <div className="note">
    //     <h1>{props.title}</h1>
    //     <p>{props.description}</p>
    // </div>

    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}
export default Cards;
