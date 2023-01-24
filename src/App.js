import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";

function App() {
  const [state, setState] = useState(null);

  return (
    <BrowserRouter>
      <Header />
      <Content />
    </BrowserRouter>
  );
}

export default App;
