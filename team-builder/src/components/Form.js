import React from "react";

function Form() {
  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(name, value);
  };
  return (
    <div>
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
    </div>
  );
}

export default Form;
