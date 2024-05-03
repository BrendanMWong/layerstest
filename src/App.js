import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import Page1 from './Page1';
import { useState } from "react";

//const PageNumberContext = createContext();

function App() {
  const [page, setPage] = useState("Page 0");

  const [color, setColor] = useState("Transparent");

  const parentColor = (value) => {
    setColor(value);
  };

  function goToHomepage() {
    setPage("Page Home")
  }

  function goToPage1() {
    setPage("Page 1")
  }

  function setToBlue() {
    setColor("Blue")
  }

  function setToRed() {
    setColor("Red")
  }

  return (
    <>
      <h1>App Page Title</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage color={color} page={page} parentColor={parentColor} />} />
          <Route path="/Page1" element={<Page1 color={color} page={page} parentColor={parentColor} />} />
        </Routes>
        <Link to="/" onClick={goToHomepage}>link to homepage</Link>
        <div></div>
        <Link to="/Page1" onClick={goToPage1}>link to page 1</Link>
      </BrowserRouter>
      <p>the page number App recieved: {page}</p>
      <p>the color App recieved: {color}</p>
      <button onClick={setToBlue}>set to blue</button >
      <button onClick={setToRed}>set to red</button >
    </>
  );
}

export default App;
