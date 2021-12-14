import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import styled from "styled-components";

function App() {
  const [teamMember, setTeamMember] = useState([]);

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
