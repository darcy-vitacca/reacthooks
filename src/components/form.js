import React, { useState } from "react";

const Form = (props) => {
  const onChange = (e) => {
    //you have to spread the person array when changing to add them
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //checks for empty before submitting to state
    if (person.firstName.trim() === "" || person.lastName.trim() === "") return;
    const newPerson = {
      firstName: person.firstName.trim(),
      lastName: person.lastName.trim(),
    };
    //this adds the new person to the people hook from above
    // setPeople([...people, newPerson]);
    props.addPerson(newPerson)
    //This resets the form
    setPerson({ firstName: "", lastName: "" });
  };
  //hooks can be used multiple times
  const [person, setPerson] = useState({ firstName: "", lastName: "" });
  return (
    <div className="col">
      <h2>Add a person</h2>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="firstName"
            placeholder="First name"
            value={person.firstName}
            onChange={onChange}
          ></input>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="lastName"
            placeholder="last name"
            value={person.lastName}
            onChange={onChange}
          ></input>
        </div>
        <button className="btn btn-success" type="submit">
          Add Person
        </button>
      </form>
    </div>
  );
};
export default Form;
