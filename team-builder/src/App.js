import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import styled from "styled-components";

const AppContainer = styled.main`
  display: flex;
  justify-content: center;
`;

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [teamMember, setTeamMember] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    // submitform
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };

    setTeamMember(teamMember.concat(newTeamMember));
  };

  const team = teamMember.map((member, idx) => (
    <div key={idx}>
      <h3>{member.name}</h3>
      <h3>{member.email}</h3>
      <h3>{member.role}</h3>
    </div>
  ));

  return (
    <AppContainer>
      <Form values={formValues} update={updateForm} submit={submitForm} />
      <div>{team}</div>
    </AppContainer>
  );
}

export default App;
