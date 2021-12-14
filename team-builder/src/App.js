import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import styled from "styled-components";

const AppContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TeamMemberContainer = styled.div`
  width: 50%;
  margin-bottom: 5rem;
`;

const TeamMemberCard = styled.div`
  background-color: #e9ecef;
  padding: 2rem;
  margin-top: 1rem;
  border-radius: 10px;
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
    setFormValues(initialFormValues);
  };

  const team = teamMember.map((member, idx) => (
    <TeamMemberCard key={idx}>
      <h3>Name: {member.name}</h3>
      <h3>Email: {member.email}</h3>
      <h3>Role: {member.role}</h3>
    </TeamMemberCard>
  ));

  return (
    <AppContainer>
      <Form values={formValues} update={updateForm} submit={submitForm} />
      <TeamMemberContainer>{team}</TeamMemberContainer>
    </AppContainer>
  );
}

export default App;
