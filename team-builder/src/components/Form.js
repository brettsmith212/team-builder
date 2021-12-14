import React from "react";
import styled from "styled-components";

const FormContainer = styled.section`
  width: 50%;
  background-color: #ced4da;
  margin-top: 4rem;
  border-radius: 10px;

  form {
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      margin-bottom: 2rem;
    }

    input,
    select {
      margin-left: 2rem;
      width: 10rem;
    }

    button {
      padding: 0.5rem 4rem;
      cursor: pointer;
    }
  }
`;

function Form(props) {
  const { values, update, submit } = props;

  const onChange = (e) => {
    const { value, name } = e.target;
    update(name, value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <FormContainer>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={values.name}
            onChange={onChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={values.email}
            onChange={onChange}
          />
        </label>
        <label>
          Role:
          <select value={values.role} name="role" onChange={onChange}>
            <option value="">--- Select a Role ---</option>
            <option value="Backend Engineer">Backend Engineer</option>
            <option value="Frontend Engineer">Frontend Engineer</option>
            <option value="Designer">Designer</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </FormContainer>
  );
}

export default Form;
