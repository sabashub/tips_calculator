import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Input from "./components/input/Input";
function App() {
  return (
    <div className="container">
      <h1 className="title">Tips Calculator</h1>
      <Card />
    </div>
  );
}

export default App;
