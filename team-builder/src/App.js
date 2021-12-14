import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import styled from "styled-components";

function App() {
  const [teamMember, setTeamMember] = useState([]);

  const AppContainer = styled.main`
    display: flex;
    justify-content: center;
  `;

  return (
    <AppContainer>
      <Form />
    </AppContainer>
  );
}

export default App;
