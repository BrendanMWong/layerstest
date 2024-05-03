import { useState } from "react";

function Homepage({ color, page, parentColor }) {

  const handleClick = () => {
    parentColor('Black');
  };

  return (
    <>
      <h1>Homepage title</h1>
      <p>the color the homepage recieved: {color}</p>
      <p>the page number homepage recieved: {page}</p>
      <button onClick={handleClick}>Update Parent State</button>
      <br></br>
    </>
  );
}

export default Homepage;