import React from "react";
import styled from "styled-components";

function Form() {
  const FormContainer = styled.section`
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;

    label {
      margin-bottom: 2rem;
    }

    input,
    select {
      margin-left: 2rem;
      width: 10rem;
    }
  `;

  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(name, value);
  };
  return (
    <FormContainer>
      <label>
        Name:
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={"empty"}
          onChange={onChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={"empty"}
          onChange={onChange}
        />
      </label>
      <label>
        Role:
        <select value={"empty"} name="role" onChange={onChange}>
          <option value="">--- Select a Role ---</option>
          <option value="BackendEngineer">Backend Engineer</option>
          <option value="FrontendEngineer">Frontend Engineer</option>
          <option value="Designer">Designer</option>
        </select>
      </label>
    </FormContainer>
  );
}

export default Form;
