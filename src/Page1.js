import { useState } from "react";

function Page1({ color, page, parentColor }) {

  const handleClick = () => {
    parentColor('Black');
  };

  return (
    <>
      <h1>Page1 title</h1>
      <p>the color page1 recieved: {color}</p>
      <p>the page number page1 recieved: {page}</p>
      <button onClick={handleClick}>Update Parent State</button>
      <br></br>
    </>
  );
}

export default Page1;